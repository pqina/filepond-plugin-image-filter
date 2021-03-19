// @ts-ignore
import { FilePondOptions } from "filepond";

declare module "filepond" {
  export interface FilePondOptions {
    /** Enable or disable image filter */
    allowImageFilter?: boolean;

    /** color matrix to apply to image, 20 digits array */
    imageFilterColorMatrix?: any;
  }
}
