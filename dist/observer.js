"use strict";
class Stock {
    constructor(stockSymbol, price) {
        this.observers = [];
        this.stockSymbol = stockSymbol;
        this.price = price;
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.stockSymbol, this.price);
        }
    }
    setPrice(price) {
        this.price = price;
        this.notifyObservers();
    }
}
class Investor {
    constructor(name) {
        this.name = name;
    }
    update(stockSymbol, price) {
        console.log(`Notifying ${this.name} of ${stockSymbol} price change to ${price}`);
    }
}
const googleStock = new Stock("GOOGL", 1500);
const appleStock = new Stock("AAPL", 300);
const investor1 = new Investor("Alice");
const investor2 = new Investor("Bob");
googleStock.registerObserver(investor1);
googleStock.registerObserver(investor2);
appleStock.registerObserver(investor1);
googleStock.setPrice(1520);
appleStock.setPrice(310);
googleStock.setPrice(1550);
//# sourceMappingURL=observer.js.map