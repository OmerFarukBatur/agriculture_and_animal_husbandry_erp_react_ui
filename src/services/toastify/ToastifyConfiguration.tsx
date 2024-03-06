export enum ToastrMessageType{
    Error = "error",
    Info = "info",
    Success = "success",
    Warning = "warning",
    Default="default"
  }

  export enum ToastrPosition {
    TopRight= "top-right",
    BottomRight = "bottom-right",
    BottomLeft = "bottom-left",
    TopLeft = "top-left",
    TopFullWidth = "top-full-width",
    BottomFullWidth = "bottom-full-width",
    TopCenter = "top-center",
    BottomCenter = "bottom-center"
    }

    export class ToastrOptions{
        messageType : ToastrMessageType = ToastrMessageType.Default;
        position : ToastrPosition = ToastrPosition.BottomRight;
      }