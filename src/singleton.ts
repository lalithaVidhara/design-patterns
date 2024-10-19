class ConfigurationManager {
    private static instance: ConfigurationManager;
    private configuration: { [key: string]: any };

    private constructor() {
        this.configuration = this.loadConfiguration();
    }

    private loadConfiguration(): { [key: string]: any } {
    
        return {
            appName: "My Application",
            version: "1.0.0",
        };
    }

    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    public get(key: string, defaultValue: any = null): any {
        const keys = key.split(".");
        let value: any = this.configuration;
        for (const k of keys) {
            if (value[k] !== undefined) {
                value = value[k];
            } else {
                return defaultValue;
            }
        }
        return value;
    }
}



const config1 = ConfigurationManager.getInstance();
console.log(config1.get("appName")); 
console.log(config1.get("version")); 


const config2 = ConfigurationManager.getInstance();
console.log(config1 === config2); 