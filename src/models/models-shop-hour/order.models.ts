import { Vendor } from './vendor.models';
import { PaymentMethod } from './payment-method.models';
import { MyAddress } from './address.models';
import { Product } from './product.models';
import { User } from './user.models';

export class OrderDeliveryProfile {
    id: number;
    order_id: number;
    status: string;
    delivery: { id: number; latitude: string; longitude: string; meta: string; user: User };
}
export class OrderProductVendor {
    id: number;
    price: number;
    product_id: number;
    vendor_id: number;
    product: Product;
    vendor: Vendor;
}
export class OrderProduct {
    id: number;
    quantity: number;
    total: number;
    subtotal: number;
    order_id: number;
    vendor_product_id: number;
    vendor_product: OrderProductVendor;
    addon_choices: Array<any>;

    total_toshow: string;
}
export class OrderPayment {
    id: number;
    payable_id: number;
    payer_id: number;
    amount: number;
    status: string;
    payment_method: PaymentMethod;
}
export class Order {
    id: number;
    notes: string;
    meta: any;
    subtotal: number;
    taxes: number;
    delivery: OrderDeliveryProfile;
    delivery_fee: number;
    total: number;
    discount: number;
    type: string;
    scheduled_on: string;
    status: string;
    vendor_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    vendor: Vendor;
    address: MyAddress;
    payment: OrderPayment;
    products: Array<OrderProduct>;

    total_toshow: string;
    subtotal_toshow: string;
    delivery_fee_toshow: string;
    discount_toshow: string;
    taxes_toshow: string;
    orderProgress: number;
}