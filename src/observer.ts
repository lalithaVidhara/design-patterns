interface Observer {
    update(stockSymbol: string, price: number): void;
}

interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}


class Stock implements Subject {
    private observers: Observer[] = [];
    private stockSymbol: string;
    private price: number;

    constructor(stockSymbol: string, price: number) {
        this.stockSymbol = stockSymbol;
        this.price = price;
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.stockSymbol, this.price);
        }
    }

    setPrice(price: number): void {
        this.price = price;
        this.notifyObservers();
    }
}


class Investor implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(stockSymbol: string, price: number): void {
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
