export interface BillingAddress {
  street: string;
  city: string;
  zip: string;
  country: string;
}

export interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  address?: string;
  billingAddress?: BillingAddress;
}
