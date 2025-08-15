import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_Props = {
    msg: string;
};

export declare const HelloWorld: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare type KeyVal = Record<string, any>;

export declare class SendToKibana {
    appId: string;
    url: string;
    settings: ST_SETTINGS;
    sendData: KeyVal;
    constructor(url: string | null | undefined, appId: string | null | undefined, settings: ST_SETTINGS);
    setCommon(data: KeyVal): void;
    send(msg: KeyVal): void;
}

declare type ST_SETTINGS = {
    muiltiLength?: number;
    intervalTime?: number;
};

export { }
