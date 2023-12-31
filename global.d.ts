declare type UserInfo = {
    username?: string,
    id?: string,
    token?: string,
    avatar?: string,
    email?: string,
    phone?: string,
}
declare type SingleBoard = {
    id?: string,
    uuid?: string,
    name?: string,
    src?: string,
    roomId?: string,
    userId?: string,
    membersId?: string[],
    lastEdit?: string,
}
declare type WhiteBoard = {
    all: SingleBoard[]
    mine: SingleBoard[]
    others: SingleBoard[]
    collection?: SingleBoard[]
    template?: SingleBoard[]
}
declare type Status =
    'select' |//正在选择元素
    'move' |//正在移动画布
    'delete' |//正在删除元素
    'edit' |//正在编辑元素
    //创建元素
    'rect' |
    'circle' |
    'line' |
    'Spline' |
    'text';
declare type UndoRedoElement = {
    type: 'create' | 'delete' | 'update' | 'temp' | 'save',
    eId: string,
    data: konva.Shape
};
export { UserInfo, WhiteBoard, SingleBoard, Status, UndoRedoElement }