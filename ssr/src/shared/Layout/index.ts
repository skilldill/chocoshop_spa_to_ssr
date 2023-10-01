import { Module } from "@tramvai/core";
import { LAYOUT_OPTIONS } from "@tramvai/tokens-render";
import { Layout } from "./Layout";

@Module({
    providers: [{
        provide: LAYOUT_OPTIONS,
        useValue: {
            components: {
                layout: Layout,
              },
        }
    }]
})
export class LayoutModule {};
