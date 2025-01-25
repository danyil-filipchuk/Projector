'use strict'

// Основний перший батьківський клас
class Vehicles {
    #privatePropertyOfVehicles; // Приватна\секретна властивість

    constructor(name, speed, capacity, privateProperty) {
        this.name = name;
        this.speed = speed;
        this.capacity = capacity;
        this.#privatePropertyOfVehicles = privateProperty;
    }

    // Основний спільний та загальний метод
    description() {
        return `В цій задачі будуть розглянуті різні види транспортних засобів з такими деталями: ${this.name}, ${this.speed} та ${this.capacity}.`;
    }

    // Метод для доступу до приватної\секретної властивості
    getPrivateProperty() {
        return `Буде розглянуто ${this.#privatePropertyOfVehicles} види транспортних засобів.`;
    }
}

// Дочірній клас Car
class Car extends Vehicles{
    #privatePropertyOfCar; // Приватна\секретна властивість

    constructor(name, speed, capacity, engineType, privateProperty) {
        super(name, speed, capacity);
        this.engineType = engineType; // Унікальна властивість
        this.#privatePropertyOfCar = privateProperty; // Приватна\секретна властивість
    }

    // Основний спільний та загальний метод
    description() {
        return `${this.name} може мати швидкість ${this.speed} км/год і вміщувати ${this.capacity} пасажирів.`;
    }

    // Унікальний метод
    drive() {
        return `${this.name} їде по дорозі зі швидкістю ${this.speed} км/год та має ${this.engineType} двигун.`;
    }

    // Метод для доступу до приватної\секретної властивості
    getPrivateProperty() {
        return `${this.name} має ${this.#privatePropertyOfCar} та вважається сучасним.`;
    }
}

// Дочірній клас Airplane
class Airplane extends Vehicles {
    #privatePropertyOfAirplane; // Приватна\секретна властивість

    constructor(name, speed, capacity, wingSpan, privateProperty) {
        super(name, speed, capacity);
        this.wingSpan = wingSpan; // Унікальна властивість
        this.#privatePropertyOfAirplane = privateProperty; // Приватна\секретна властивість
    }

    // Основний спільний та загальний метод
    description() {
        return `${this.name} може мати швидкість ${this.speed} км/год і вміщувати ${this.capacity} пасажирів.`;
    }

    // Унікальний метод
    fly() {
        return `${this.name} має розмах крил ${this.wingSpan} метри.`;
    }

    navigation() {
        return `${this.name} використовує навігацію для польотів небом.`
    }

    // Метод для доступу до приватної\секретної властивості
    getPrivateProperty() {
        return `Максимальна висота польоту для ${this.name} складає ${this.#privatePropertyOfAirplane} метрів.`;
    }
}

// Дочірній клас Ship
class Ship extends Vehicles {
    #privatePropertyOfShip; // Приватна\секретна властивість

    constructor(name, speed, capacity, shipType, privateProperty) {
        super(name, speed, capacity);
        this.shipType = shipType; // Унікальна властивість
        this.#privatePropertyOfShip = privateProperty; // Приватна\секретна властивість
    }

    // Основний спільний та загальний метод
    description() {
        return `${this.name} може мати швидкість ${this.speed} км/год і вміщувати ${this.capacity} пасажирів.`;
    }

    // Унікальний метод
    sail() {
        return `${this.name} - це ${this.shipType} та пливе зі швидкістю ${this.speed} км/год.`;
    }

    navigation() {
        return `${this.name} використовує навігацію для плавання морем.`;
    }

    // Метод для доступу до приватної\секретної властивості
    getPrivateProperty() {
        return `${this.name} має ${this.#privatePropertyOfShip} кают.`;
    }
}

// Дочірній клас Train
class Train extends Vehicles {
    #privatePropertyOfTrain; // Приватна\секретна властивість

    constructor(name, speed, capacity, trainType, privateProperty) {
        super(name, speed, capacity);
        this.trainType = trainType; // Унікальна властивість
        this.#privatePropertyOfTrain = privateProperty; // Приватна\секретна властивість
    }

    // Основний спільний та загальний метод
    description() {
        return `${this.name} може мати швидкість ${this.speed} км/год і вміщувати ${this.capacity} пасажирів.`;
    }

    // Унікальний метод
    moveOnRails() {
        return `${this.name} - це ${this.trainType} потяг.`;
    }

    // Метод для доступу до приватної\секретної властивості
    getPrivateProperty() {
        return `Ширина колії для ${this.name} складає ${this.#privatePropertyOfTrain} мм.`;
    }
}

// Створення об'єктів на основні описаних класів та виклик методів
const vehicles = new Vehicles('тип транспорту', 'швидкість', 'місткість', 'чотири');
console.log(vehicles.description());
console.log(vehicles.getPrivateProperty());

const car = new Car ('Автомобіль Tesla', 200, 5, 'електро', 'автопілот');
console.log(car.description());
console.log(car.drive());
console.log(car.getPrivateProperty());

const plane = new Airplane('Boeing 737', 890, 190, 34, 11000);
console.log(plane.description());
console.log(plane.fly());
console.log(plane.navigation());
console.log(plane.getPrivateProperty());

const ship = new Ship('Harmony of the Seas', 46, 5500, 'круїзний лайнер', 2700);
console.log(ship.description());
console.log(ship.sail());
console.log(ship.navigation());
console.log(ship.getPrivateProperty());

const train = new Train('Hyundai Intercity', 160, 500, 'пасажирський', 1520);
console.log(train.description());
console.log(train.moveOnRails());
console.log(train.getPrivateProperty());

