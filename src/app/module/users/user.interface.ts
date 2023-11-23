// user type

export type TUser = {
  userId: number;
  username: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
  };
};

// orders types

export type Orders = {
  orderId: string;
  productName: string;
  price: number;
  quantity: number;
};
