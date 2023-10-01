import { createApp } from '@tramvai/core';
import { COMBINE_REDUCERS, CommonModule, ENV_USED_TOKEN } from '@tramvai/module-common';
import { SpaRouterModule } from '@tramvai/module-router';
import { RenderModule } from '@tramvai/module-render';
import { ServerModule } from '@tramvai/module-server';
import { ErrorInterceptorModule } from '@tramvai/module-error-interceptor';
import { SeoModule } from '@tramvai/module-seo';
import {
  RENDER_SLOTS,
  ResourceType,
  ResourceSlot,
} from '@tramvai/tokens-render';
import { HeaderModule } from '~shared/Header';
import './styles/common.module.css';
import { FooterModule } from '~shared/Footer';
import { LayoutModule } from '~shared/Layout';
import { catalogReducer } from 'store/catalog';
import { HttpClientModule } from '@tramvai/module-http-client';

createApp({
  name: 'ssr',
  modules: [
    CommonModule,
    SpaRouterModule,
    RenderModule.forRoot({ useStrictMode: true }),
    SeoModule,
    ServerModule,
    ErrorInterceptorModule,
    HeaderModule,
    FooterModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: RENDER_SLOTS,
      multi: true,
      useValue: {
        type: ResourceType.asIs,
        slot: ResourceSlot.HEAD_META,
        payload:
          '<meta name="viewport" content="width=device-width, initial-scale=1">',
      },
    },
    {
      provide: ENV_USED_TOKEN,
      useValue: [
        { key: 'API_URL' },
      ],
      multi: true,
    },
    {
      provide: COMBINE_REDUCERS,
      useValue: [catalogReducer],
    }
  ],
});
