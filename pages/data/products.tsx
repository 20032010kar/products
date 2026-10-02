export interface Product {
    id: number;
    title: string;
    category: "phones" | "laptops";
    price: number;
    description: string;
    img: string;
}

export const products: Product[] = [
    { 
        id: 1, 
        title: "Samsung Galaxy S26 Ultra", 
        category: "phones", 
        price: 56809, 
        description: "Мобільний телефон Samsung Galaxy S26 Ultra 12/256GB Black",
        img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 2, 
        title: "Samsung Galaxy A55", 
        category: "phones", 
        price: 18999, 
        description: "Смартфон Samsung Galaxy A55 8/256GB Awesome Navy",
        img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 3, 
        title: "Asus ROG Zephyrus G14", 
        category: "laptops", 
        price: 68000, 
        description: "Ігровий ноутбук з високою продуктивністю та стильним дизайном.",
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80"
    },
    { 
        id: 4, 
        title: "Lenovo Legion Pro 5", 
        category: "laptops", 
        price: 72000, 
        description: "Потужний ноутбук для геймерів та професіоналів.",
        img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80"
    },
];