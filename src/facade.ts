class Inventory {
    public checkStock(item: string): boolean {
        console.log(`Checking stock for ${item}`);
        return true;
    }
}

class Payment {
    public processPayment(amount: number): boolean {
        console.log(`Processing payment of Rs${amount}`);
        return true;
    }
}

class Shipping {
    public arrangeShipping(item: string): void {
        console.log(`Arranging shipping for ${item}`);
    }
}

class Notify {
    public sendConfirmation(email: string, item: string): void {
        console.log(`Sending confirmation to ${email} for ${item}`);
    }
}

class OnlineShoppingFacade {
    private inventory: Inventory;
    private payment: Payment;
    private shipping: Shipping;
    private notification: Notify;

    constructor() {
        this.inventory = new Inventory();
        this.payment = new Payment();
        this.shipping = new Shipping();
        this.notification = new Notify();
    }

    public placeOrder(item: string, email: string, amount: number): void {
        console.log("Placing order...");
        if (this.inventory.checkStock(item)) {
            if (this.payment.processPayment(amount)) {
                this.shipping.arrangeShipping(item);
                this.notification.sendConfirmation(email, item);
                console.log("Order placed successfully!");
            }
        }
    }
}

const shoppingFacade = new OnlineShoppingFacade();
shoppingFacade.placeOrder("Iphone X", "lsv@gmail.com", 50000);

