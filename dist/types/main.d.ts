import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_Props = {
    msg: string;
};

export declare const add: AddFunction;

declare type AddFunction = (a: number, b: number) => number;

export declare const HelloWorld: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export { }
