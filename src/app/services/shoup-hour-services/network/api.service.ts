import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from 'src/models/models-shop-hour/country.models';
import { AuthResponse } from 'src/models/models-shop-hour/auth-response.models';
import { SocialLoginRequest } from 'src/models/models-shop-hour/sociallogin-request.models';
import { SignUpRequest } from 'src/models/models-shop-hour/auth-signup-request.models';
import { MyMeta } from 'src/models/models-shop-hour/meta.models';
import { MyAddress } from 'src/models/models-shop-hour/address.models';
import { BaseListResponse } from 'src/models/models-shop-hour/base-list.models';
import { Helper } from 'src/models/models-shop-hour/helper.models';
import { Rating } from 'src/models/models-shop-hour/rating.models';
import { RatingSummary } from 'src/models/models-shop-hour/rating-summary.models';
import { PaymentMethod } from 'src/models/models-shop-hour/payment-method.models';
import { SupportRequest } from 'src/models/models-shop-hour/support-request.models';
import { User } from 'src/models/models-shop-hour/user.models';
import { RateRequest } from 'src/models/models-shop-hour/rate-request.models';
import { Category } from 'src/models/models-shop-hour/category.models';
import { Product } from 'src/models/models-shop-hour/product.models';
import { OrderRequest } from 'src/models/models-shop-hour/order-request.models';
import { Coupon } from 'src/models/models-shop-hour/coupon.models';
import { Order } from 'src/models/models-shop-hour/order.models';
import { APP_CONFIG_ShopHour, ShopHourConfig } from 'src/app/shophour.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private myHeaders: HttpHeaders;

  private currency_icon: string;
  private locale: string;
  private reviewedIds = new Array<string>();
  private uuid: string = "xxx";
  private platform: string = "android";

  constructor(@Inject(APP_CONFIG_ShopHour) private config: ShopHourConfig, private http: HttpClient) { }

  reloadSetting() {
    this.currency_icon = Helper.getSetting("currency_icon");
    this.locale = Helper.getSetting("locale");
  }

  reloadItemsReviewed() {
    this.reviewedIds = Helper.getReviewedProductIds();
  }

  setupHeaders(authToken?: string) {
    let tokenToUse = authToken ? authToken : Helper.getToken();
    let savedLanguageCode = Helper.getLanguageDefault();
    this.myHeaders = tokenToUse ? new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': ('Bearer ' + tokenToUse),
      'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
      'X-Device-Id': this.uuid ? this.uuid : "xxx",
      'X-Device-Type': this.platform ? this.platform : "android"
    }) : new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
      'X-Device-Id': this.uuid ? this.uuid : "xxx",
      'X-Device-Type': this.platform ? this.platform : "android"
    });
  }


  setUuidAndPlatform(uuid: string, platform: string) {
    this.uuid = uuid;
    this.platform = platform ? String(platform).toLowerCase() : platform;
    this.setupHeaders();
  }

  public getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>('./assets/json/countries.json').pipe(
      tap(data => {
        let indiaIndex = -1;
        // if (data) {
        //   for (let i = 0; i < data.length; i++) {
        //     if (data[i].name == "India") {
        //       indiaIndex = i;
        //       break;
        //     }
        //   }
        // }
        if (indiaIndex != -1) data.unshift(data.splice(indiaIndex, 1)[0]);
      }),
      catchError(this.handleError<Array<Country>>('getCountries', []))
    );
  }

  public getURL(url: string): Observable<any> {
    return this.http.get<any>(url, { headers: this.myHeaders });
  }

  public getSettings(): Observable<Array<MyMeta>> {
    return this.http.get<Array<MyMeta>>(this.config.apiBase + 'api/settings', { headers: this.myHeaders });
  }

  public submitSupport(supportRequest: SupportRequest): Observable<{}> {
    return this.http.post<{}>(this.config.apiBase + "api/support", supportRequest, { headers: this.myHeaders });
  }

  public checkUser(checkUserRequest: any): Observable<{}> {
    return this.http.post<{}>(this.config.apiBase + 'api/check-user', checkUserRequest, { headers: this.myHeaders });
  }

  public loginSocial(socialLoginRequest: SocialLoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.config.apiBase + 'api/social/login', socialLoginRequest, { headers: this.myHeaders }).pipe(tap(data => this.setupUserMe(data)));
  }

  public loginUser(loginTokenRequest: { token: string, role: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.config.apiBase + 'api/login', loginTokenRequest, { headers: this.myHeaders }).pipe(tap(data => this.setupUserMe(data)));
  }

  public createUser(signUpRequest: SignUpRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.config.apiBase + 'api/register', signUpRequest, { headers: this.myHeaders }).pipe(tap(data => this.setupUserMe(data)));
  }

  public updateUser(updateRequest): Observable<User> {
    return this.http.put<User>(this.config.apiBase + 'api/user', updateRequest, { headers: this.myHeaders }).pipe(tap(data => this.setupUserMe(data)));
  }

  public rateUser(uId: number, rateRequest: RateRequest): Observable<{}> {
    return this.http.post<{}>(this.config.apiBase + "api/user/ratings/" + uId, JSON.stringify(rateRequest), { headers: this.myHeaders });
  }

  public getCategoriesParents(scope: string): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.config.apiBase + "api/categories?pagination=0&parent=1&scope=" + scope, { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.length) for (let cat of data) this.setupCategory(cat);
    })
      //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
    );
  }

  public getBanners(scope: string): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.config.apiBase + "api/banners?pagination=0&parent=1&scope=" + scope, { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.length) for (let cat of data) this.setupCategory(cat);
    })
      //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
    );
  }

  public getCategoriesSub(scope: string, parentId: number): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.config.apiBase + "api/categories?pagination=0&category=" + parentId + "&scope=" + scope, { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.length) for (let cat of data) this.setupCategory(cat);
    })
      //, catchError(this.handleError<Array<Category>>('getCategoriesSub', this.getTestCategories()))
    );
  }
  public getProductsFavorite(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.config.apiBase + "api/products/favourites/list", { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.length) for (let pro of data) this.setupProduct(pro);
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public getProductsWithQuery(query: string, page: number): Observable<BaseListResponse> {
    this.reloadSetting();
    let urlParams = new URLSearchParams();
    urlParams.append("search", query);
    urlParams.append("page", String(page));
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/products?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.data && data.data.length) for (let pro of data.data) this.setupProduct(pro);
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public getProductsWithCategoryId(scope: string, categoryId: number, type: string, page: number): Observable<BaseListResponse> {
    this.reloadSetting();
    let urlParams = new URLSearchParams();
    urlParams.append("category", String(categoryId));
    urlParams.append("page", String(page));
    urlParams.append("scope", scope);
    if (type != null) urlParams.append("vendor_type", type);
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/products?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.data && data.data.length) for (let pro of data.data) this.setupProduct(pro);
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public getProductsWithVendorId(vendorId: number, page: number): Observable<BaseListResponse> {
    this.reloadSetting();
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/products?vendor=" + vendorId + "&page=" + page, { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.data && data.data.length) for (let pro of data.data) this.setupProduct(pro);
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public getProductsWithId(productId): Observable<Product> {
    this.reloadSetting();
    return this.http.get<Product>(this.config.apiBase + "api/products/" + productId, { headers: this.myHeaders }).pipe(tap(data => {
      this.setupProduct(data);
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public toggleProductFavorite(productId): Observable<any> {
    return this.http.post<any>(this.config.apiBase + "api/products/favourites/" + productId, {}, { headers: this.myHeaders });
  }

  public getPaymentMethods(): Observable<Array<PaymentMethod>> {
    return this.http.get<Array<PaymentMethod>>(this.config.apiBase + 'api/payment/methods', { headers: this.myHeaders });
  }

  public getAddresses(): Observable<Array<MyAddress>> {
    return this.http.get<Array<MyAddress>>(this.config.apiBase + 'api/addresses', { headers: this.myHeaders });
  }

  public addressAdd(address): Observable<MyAddress> {
    return this.http.post<MyAddress>(this.config.apiBase + 'api/addresses', address, { headers: this.myHeaders });
  }

  public addressUpdate(address): Observable<MyAddress> {
    return this.http.put<MyAddress>(this.config.apiBase + 'api/addresses/' + address.id + '/update', address, { headers: this.myHeaders });
  }

  public createOrder(orderRequest: OrderRequest): Observable<Order> {
    return this.http.post<Order>(this.config.apiBase + 'api/orders', orderRequest, { headers: this.myHeaders });
  }

  public checkCoupon(couponCode: string): Observable<Coupon> {
    return this.http.get<Coupon>(this.config.apiBase + 'api/coupons/check-validity?code=' + couponCode, { headers: this.myHeaders });
  }

  public getOrderById(orderId): Observable<Order> {
    this.reloadSetting();
    this.reloadItemsReviewed();
    return this.http.get<Order>(this.config.apiBase + "api/orders/" + orderId, { headers: this.myHeaders }).pipe(tap(data => {
      this.setupOrder(data);
    }));
  }

  public getOrders(pageNo: number): Observable<BaseListResponse> {
    this.reloadSetting();
    this.reloadItemsReviewed();
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/orders?page=" + pageNo, { headers: this.myHeaders }).pipe(tap(data => {
      for (let order of data.data) this.setupOrder(order);
    }));
  }

  public getCoupons(): Observable<Array<Coupon>> {
    return this.http.get<Array<Coupon>>(this.config.apiBase + "api/coupons", { headers: this.myHeaders });
  }

  public getRatingSummaryProduct(productId): Observable<Rating> {
    return this.http.get<Rating>(this.config.apiBase + "api/products/ratings/summary/" + productId, { headers: this.myHeaders }).pipe(tap(data => {
      let ratingSummaries = RatingSummary.defaultArray();
      for (let ratingSummaryResult of data.summary) {
        ratingSummaries[ratingSummaryResult.rounded_rating - 1].total = ratingSummaryResult.total;
        ratingSummaries[ratingSummaryResult.rounded_rating - 1].percent = ((ratingSummaryResult.total / data.total_ratings) * 100);
      }
      data.summary = ratingSummaries;
    }));
  }

  public getReviewsProduct(productId, pageNo: number): Observable<BaseListResponse> {
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/products/ratings/" + productId + "?page=" + pageNo, { headers: this.myHeaders }).pipe(tap(data => {
      let locale = Helper.getLocale();
      for (let review of data.data) review.created_at = Helper.formatTimestampDate(review.created_at, locale);
    }));
  }

  public postReviewProduct(productId, rr: RateRequest): Observable<any> {
    return this.http.post<any>(this.config.apiBase + "api/products/ratings/" + productId, rr, { headers: this.myHeaders });
  }

  private setupOrder(order: Order) {
    order.created_at = Helper.formatTimestampDate(order.created_at, this.locale);
    if (order.scheduled_on) order.scheduled_on = Helper.formatTimestampDate(order.scheduled_on, this.locale);

    order.total_toshow = this.currency_icon + Number(order.total).toFixed(2);
    order.subtotal_toshow = this.currency_icon + Number(order.subtotal).toFixed(2);
    if (order.delivery_fee) order.delivery_fee_toshow = this.currency_icon + Number(order.delivery_fee).toFixed(2);
    if (order.discount) order.discount_toshow = this.currency_icon + Number(order.discount).toFixed(2);
    if (order.taxes) order.taxes_toshow = this.currency_icon + Number(order.taxes).toFixed(2);

    for (let product of order.products) {
      product.total_toshow = this.currency_icon + Number(product.total).toFixed(2);
      if (product.vendor_product && product.vendor_product.product) {
        if (!product.vendor_product.product.price) product.vendor_product.product.price = 0;
        product.vendor_product.product.priceToShow = this.currency_icon + Number(product.vendor_product.product.price).toFixed(2);

        product.vendor_product.product.images = new Array<string>();
        if (product.vendor_product.product.mediaurls && product.vendor_product.product.mediaurls.images) for (let imgObj of product.vendor_product.product.mediaurls.images) if (imgObj["default"]) product.vendor_product.product.images.push(imgObj["default"]);
        if (!product.vendor_product.product.images.length) product.vendor_product.product.images.push("assets/images/plc_item_image.png");

        //custom
        product.vendor_product.product.reviewed = (this.reviewedIds != null && this.reviewedIds.includes(String(String(order.id) + String(product.vendor_product.product.id))));
      }
    }

    if (order.vendor) {
      if (!order.vendor.mediaurls || !order.vendor.mediaurls.images) order.vendor.mediaurls = { images: [] };
      order.vendor.image = "assets/images/plc_seller_profile.png";
      for (let imgObj of order.vendor.mediaurls.images) if (imgObj["default"]) { order.vendor.image = imgObj["default"]; break; }
    }

    if (order.delivery) {
      order.delivery.delivery.user.image_url = "assets/images/empty_dp";
      if (!order.delivery.delivery.user.mediaurls || !order.delivery.delivery.user.mediaurls.images) order.delivery.delivery.user.mediaurls = { images: [] };
      for (let imgObj of order.delivery.delivery.user.mediaurls.images) if (imgObj["default"]) { order.delivery.delivery.user.image_url = imgObj["default"]; break; }
    }
  }

  private setupCategory(category: Category) {
    if (category.mediaurls && category.mediaurls.images) for (let imgObj of category.mediaurls.images) if (imgObj["default"]) { category.image = imgObj["default"]; break; }
    if (!category.image) category.image = "assets/images/plc_item_image.png";
  }

  public setupProduct(product: Product) {
    //product.prescription_required = (product.meta && product.meta.prescription);

    if (!product.ratings) product.ratings = 0;
    if (!product.ratings_count) product.ratings_count = 0;
    if (!product.price) product.price = 0;
    product.priceToShow = this.currency_icon + product.price.toFixed(2);
    product.ratings = Number(product.ratings.toFixed(2));

    product.vendorText = "";
    if (product.vendor_products && product.vendor_products.length) {
      for (let vp of product.vendor_products) {
        if (!vp.sale_price) vp.sale_price = 0;
        vp.priceToShow = this.currency_icon + vp.price.toFixed(2);
        vp.sale_priceToShow = this.currency_icon + vp.sale_price.toFixed(2);

        if (vp.vendor) {
          if (!vp.vendor.mediaurls || !vp.vendor.mediaurls.images) vp.vendor.mediaurls = { images: [] };
          vp.vendor.image = "assets/images/plc_seller_profile.png";
          for (let imgObj of vp.vendor.mediaurls.images) if (imgObj["default"]) { vp.vendor.image = imgObj["default"]; break; }

          product.vendorText += (vp.vendor.name + ", ");
        }
      }
    }

    if (product.vendorText.length) product.vendorText = product.vendorText.substring(0, product.vendorText.length - 2);

    if (product.categories && product.categories.length) {
      for (let cat of product.categories) this.setupCategory(cat);
    }

    product.images = new Array<string>();
    if (product.mediaurls && product.mediaurls.images) for (let imgObj of product.mediaurls.images) if (imgObj["default"]) product.images.push(imgObj["default"]);
    if (!product.images.length) product.images.push("assets/images/plc_item_image.png");
  }

  private setupUserMe(data) {
    if (!data.mediaurls || !data.mediaurls.images) data.mediaurls = { images: [] };
    if (!data.image_url) for (let imgObj of data.mediaurls.images) if (imgObj["default"]) { data.image_url = imgObj["default"]; break; }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
