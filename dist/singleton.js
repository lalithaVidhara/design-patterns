"use strict";
class ConfigurationManager {
    constructor() {
        this.configuration = this.loadConfiguration();
    }
    loadConfiguration() {
        return {
            appName: "My Application",
            version: "1.0.0",
            database: {
                host: "localhost",
                port: 5432
            },
            features: {
                enableFeatureX: true,
                enableFeatureY: false
            }
        };
    }
    static getInstance() {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }
    get(key, defaultValue = null) {
        const keys = key.split(".");
        let value = this.configuration;
        for (const k of keys) {
            if (value[k] !== undefined) {
                value = value[k];
            }
            else {
                return defaultValue;
            }
        }
        return value;
    }
}
const config1 = ConfigurationManager.getInstance();
console.log(config1.get("appName"));
console.log(config1.get("database.host"));
const config2 = ConfigurationManager.getInstance();
console.log(config1 === config2);
//# sourceMappingURL=singleton.js.map