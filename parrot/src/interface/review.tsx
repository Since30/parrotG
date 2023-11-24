
interface Vehicle {
    id: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
    description: string;
    image: string;
    status: number;
    createdAt: string;
    updatedAt: string;
  }

    interface Review {
        id: number;
        userId: number;
        comment: string;
        rating: number;
        createdAt: string;
    }


