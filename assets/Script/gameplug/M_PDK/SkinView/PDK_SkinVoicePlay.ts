import { PDK } from "../GameHelp/PDK_IClass";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SkinVoicePlay extends cc.Component {

    @property([cc.Sprite])
    private img_statusAry: cc.Sprite[]=[];
    private _idx: number;
    private _intervalIdx: number;

    onLoad() {
        this.node.active = false;
    }
    public SetChair(chair: number) {
        switch (chair) {
            case 0: {
                this.node.x = -542;
                this.node.y = -267;
                break;
            }
            case 1: {
                this.node.x = 581;
                this.node.y = 5;
                break;
            }
            case 2: {
                this.node.x = 0;
                this.node.y = 258;
                break;
            }
            case 3: {
                // this.node.x = 0;
                // this.node.y = 292;
                this.node.x = -542;
                this.node.y = 50;
                break;
            }
        }
        if (chair == 0) {
            this.node.y += 29.5;
            this.node.x += 0;
        }
        else if (chair == 1) {
            this.node.y += 39.5;
            this.node.x -= 80;
            this.node.rotation = 180;
        }else if(chair ==2){
              this.node.y += 40;
              this.node.x -= 180
              this.node.rotation = 180;

        }
        else if (chair == 3) {
            this.node.y += 29.5;
            this.node.x += 175.5;
        }
        else if (chair == 4 || chair == 5) {
            this.node.y += 29.5;
            this.node.x += 80;
        }
    }
    public Init() {
        this.Destroy();
    }
    /**
     * 移除所有子元素
     * */
    public Destroy(): void {
        this.unscheduleAllCallbacks();
        this.node.active = false;
    }
    public startPlay(): void {
        this.unscheduleAllCallbacks();
        this._idx = 1;
        for (var i: number = 0; i < this.img_statusAry.length; i++) {
            this.img_statusAry[i].node.active = i < this._idx;
        }
        this.node.active = true;
    }

    public stopPlay(): void {
        this.unscheduleAllCallbacks();
        this.node.active = false;
    }

    /**
     * 循环调用
     * */
    private onInterval(): void {
        ++this._idx;
        if (this._idx > 4) {
            this._idx = 1;
        }
        for (var i: number = 0; i < this.img_statusAry.length; i++) {
            this.img_statusAry[i].node.active = i < this._idx;
        }
    }
}
