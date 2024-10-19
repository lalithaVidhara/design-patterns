"use strict";
class Inventory {
    checkStock(item) {
        console.log(`Checking stock for ${item}`);
        return true;
    }
}
class Payment {
    processPayment(amount) {
        console.log(`Processing payment of $${amount}`);
        return true;
    }
}
class Shipping {
    arrangeShipping(item) {
        console.log(`Arranging shipping for ${item}`);
    }
}
class Notify {
    sendConfirmation(email, item) {
        console.log(`Sending confirmation to ${email} for ${item}`);
    }
}
class OnlineShoppingFacade {
    constructor() {
        this.inventory = new Inventory();
        this.payment = new Payment();
        this.shipping = new Shipping();
        this.notification = new Notify();
    }
    placeOrder(item, email, amount) {
        console.log("Placing order...");
        if (this.inventory.checkStock(item)) {
            if (this.payment.processPayment(amount)) {
                this.shipping.arrangeShipping(item);
                this.notification.sendConfirmation(email, item);
                console.log("Order placed successfully!");
            }
            else {
                console.log("Payment failed!");
            }
        }
        else {
            console.log("Item out of stock!");
        }
    }
}
const shoppingFacade = new OnlineShoppingFacade();
shoppingFacade.placeOrder("Laptop", "customer@example.com", 1500);
//# sourceMappingURL=facade.js.map