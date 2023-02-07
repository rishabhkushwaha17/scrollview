import { _decorator, Component, Node, Prefab, instantiate, ScrollView, Label } from 'cc';
const { ccclass, property } = _decorator;
import json from   './json';
@ccclass('NewComponent')
export class NewComponent extends Component {
    @property({type:Prefab})
    myImage:Prefab  = null;
    @property({type:Prefab})
    myImag:Prefab  = null;
    json=json;    
    start() {
               let a=this.node.getComponent(ScrollView).content;
               for(let index=0;   index<this.json.length; index++){
                    let b=instantiate(this.myImage);
                    b.getChildByName("Label").getComponent(Label).string=this.json[index].name
                    b.getChildByName("Label").getComponent(Label).color.fromHEX(this.json[index].name)
                    b.getChildByName("Label-001").getComponent(Label).string=String(index+1)
                    b.getChildByName("Label-002").getComponent(Label).string=String(this.json[index].kill)
                    a.addChild(b);
                }
    }
    update(deltaTime: number) {
    }
}

