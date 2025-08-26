declare namespace TcHmi.Controls.Beckhoff.Industries.Common {
    class TcHmiPushButton extends TcHmi.Controls.Beckhoff.TcHmiButton {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /**
         * Internal reference to the attribute "data-tchmi-tap-mode"
         */
        protected __tapMode: Industries.Common.TapMode | undefined;
        protected __lastActivatedTapMode: Industries.Common.TapMode | undefined;
        protected __toggleLock: boolean;
        /** Inactive color of the push button */
        protected __inactiveColor: TcHmi.SolidColor | null | undefined;
        /** Active color of the push button */
        protected __activeColor: TcHmi.SolidColor | null | undefined;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         */
        __init(): void;
        /**
         * Is called by the system after the control instance gets part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __attach(): void;
        /**
         * Is called by the system after the control instance is no longer part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Processes the current state if state has changed.
         * @param state The new state of the control.
         * @param forwardStateSymbol Controls if a change should be reflected to a possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
         * @param source What caused the state change. Could be 'userInteraction', the change of an 'attribute' or the state symbol, or the 'toggleGroup'.
         */
        protected __setInternalState(state: boolean, source: string): void;
        /**
         * Event handler for the onPropertyChanged<IsEnabled> Event. Overrides __onPropertyIsEnabledChanged of TcHmiButton.
         * @param _event The event that is handled. Unused.
         * @param data The event data.
         */
        protected __onPropertyIsEnabledChanged(_event: EventProvider.Event, data: {
            propertyName: string;
            dirtyPaths?: string[];
        }): void;
        /**
         * Returns an event handler for the mousedown event.
         */
        protected __onMouseDown(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseup event.
         */
        protected __onMouseUp(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseenter event.
         */
        protected __onMouseEnter(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseleave event.
         */
        protected __onMouseLeave(event: MouseEvent): void;
        /**
         * Returns an event handler for the touchstart event.
         */
        protected __onTouchStart(event: TouchEvent): void;
        /**
         * Returns an event handler for the touchend and touchcancel events.
         */
        protected __onTouchEndOrCancel(event: TouchEvent): void;
        /**
         * Sets the tapMode value and calls the associated process function (processTapMode).
         * @param valueNew The new value for tapMode.
         */
        setTapMode(valueNew: Industries.Common.TapMode | null): void;
        /**
         * Returns the current value of tapMode.
         */
        getTapMode(): TapMode | undefined;
        /**
         * Sets the text color and calls the associated process function (processInactiveColor).
         * @param valueNew The new value for inactiveColor.
         */
        setInactiveColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the inactiveColor object resolver.
         */
        protected __onResolverForInactiveColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of inactiveColor.
         */
        getInactiveColor(): SolidColor | null | undefined;
        /**
         * Processes the current inactiveColor attribute value.
         */
        protected __processInactiveColor(): void;
        /**
         * Sets the text color and calls the associated process function (processActiveColor).
         * @param valueNew The new value for activeColor.
         */
        setActiveColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the activeColor object resolver.
         */
        protected __onResolverForActiveColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of activeColor.
         */
        getActiveColor(): SolidColor | null | undefined;
        /**
         * Processes the current activeColor attribute value.
         */
        protected __processActiveColor(): void;
    }
}
//# sourceMappingURL=TcHmiPushButton.d.ts.map