declare namespace TcHmi.BuildingAutomation.Controls.Management {
    /**
     * A control to display trend line charts.
     * @category Control
     */
    class Trend extends System.BaseControl implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: BuildingAutomation.Charting.Trend;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the ShowDataZoom attribute.
         * @category Attribute setter and getter
         * @param p The new ShowDataZoom or null.
         * @returns The Trend.
         */
        setShowDataZoom(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowDataZoom attribute.
         * @category Attribute setter and getter
         */
        protected __processShowDataZoom(): void;
        /**
         * Getter for ShowDataZoom attribute.
         * @category Attribute setter and getter
         * @returns The ShowDataZoom attribute.
         */
        getShowDataZoom(): boolean | null | undefined;
        /**
         * Setter for the XAxesRange attribute.
         * @category Attribute setter and getter
         * @param p The new XAxesRange or null.
         * @returns The Trend.
         */
        setXAxesRange(p: number | null | undefined): this;
        /**
         * Processor for the XAxesRange attribute.
         * @category Attribute setter and getter
         */
        protected __processXAxesRange(): void;
        /**
         * Getter for XAxesRange attribute.
         * @category Attribute setter and getter
         * @returns The XAxesRange attribute.
         */
        getXAxesRange(): number | null | undefined;
        /**
         * Setter for the SeriesSelectorWidth attribute.
         * @category Attribute setter and getter
         * @param p The new SeriesSelectorWidth or null.
         * @returns The Trend.
         */
        setSeriesSelectorWidth(p: number | null | undefined): this;
        /**
         * Processor for the SeriesSelectorWidth attribute.
         * @category Attribute setter and getter
         */
        protected __processSeriesSelectorWidth(): void;
        /**
         * Getter for SeriesSelectorWidth attribute.
         * @category Attribute setter and getter
         * @returns The SeriesSelectorWidth attribute.
         */
        getSeriesSelectorWidth(): number | null | undefined;
    }
}
//# sourceMappingURL=Trend.d.ts.map