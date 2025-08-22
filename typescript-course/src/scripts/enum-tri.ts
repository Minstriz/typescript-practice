import { log } from "console";

const directions = {
    left: "left",
    right: "right",
    up: "up",
    down: "down",
    forward: "forward",
} as const;

//Enum sẽ tự động đánh số không cần phải khai báo mệt như phía trên, là tổng hợp của nhiều hằng số không thay đổi   

//Numeric Enum
enum DirectionWithEnum {
    top = 1,
    right = 3,
    bottom = 5,
    left = 7
}

//String Enum
enum TabWithEnum {
    Home = "Nhà nè",
    WC = "Nhà vệ sinh nhật",
    Hotel = "Khách sạn ",
    Như = "Như"
}

console.log(DirectionWithEnum.top);