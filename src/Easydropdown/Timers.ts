class Timers {
    public pollChangeIntervalId: number;
    public pollMutationIntervalId: number;
    public searchTimoutId: number;
    public scrollTimeoutId: number;

    public clear(): void {
        Object.keys(this).forEach(key => window.clearInterval(this[key]));
    }
}

export default Timers;