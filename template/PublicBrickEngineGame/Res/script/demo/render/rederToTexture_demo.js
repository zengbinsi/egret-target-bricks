// var node = new BK.Node();
// var backTex  =new BK.Texture('GameRes://resource/texture/plane_blue.png');
// var sp =new BK.Sprite(200,200,backTex,0,1,1,1);
// sp.name = "sprite";
// // sp.position = {x:100,y:100};
// node.position = {x:100,y:100};
// node.name = "super";
// node.addChild(sp);
// var node1 = new BK.Node();
// var sp1 =new BK.Sprite(200,200,backTex,0,1,1,1);
// sp1.name = "sprite1";
// // sp.position = {x:100,y:100};
// node1.position = {x:0,y:0};
// node1.name = "super1";
// node1.addChild(sp1);
// var node2 = new BK.Node();
// var sp2 =new BK.Sprite(200,200,backTex,0,1,1,1);
// sp2.name = "sprite2";
// // sp.position = {x:100,y:100};
// node2.position = {x:200,y:200};
// node2.name = "super2";
// node2.addChild(sp2);
// BK.Director.root.addChild(node);
// BK.Director.root.addChild(node1);
// BK.Director.root.addChild(node2);
// var superPos = {x:100,y:100};
// var pos = sp.convertToWorldSpace(superPos);
// BK.Script.log(0,0,"Position x:"+pos.x+" y:"+pos.y);
// var tex = BK.Texture.createTexture(BK.Director.screenPixelSize.width,BK.Director.screenPixelSize.height);
// BK.Script.log(1,1,"rogersxiao tex="+tex);
// //BK.Render.renderToTexture(BK.Director.root,tex);
// var temp = 0;
// BK.Director.ticker.add(function(ts,duration){
//     if(temp ==  0){
//         //BK.Render.treeRender( BK.Director.root,duration);
//         BK.Render.renderToTexture(BK.Director.root,tex);
//         tex.writeToDisk("GameSandBox://test.png");
//         temp= 1;
//         var cmd = "cs.share_pic.local";
//         var data = {
//                     "path":"GameSandBox://test.png"
//                    };
//         BK.MQQ.SsoRequest.send(data, cmd);
//     }
// })





BK.Director.root.position = { x: 0, y: BK.Director.screenPixelSize.height };
var node = new BK.Node();
var backTex = new BK.Texture('GameRes://resource/assets/bg.jpg');
var sp = new BK.Sprite(400, 400, backTex, 0, 1, 1, 1);
sp.name = "sprite";
node.position = { x: 0, y: 0 };
node.name = "super";
node.addChild(sp);

let node2 = new BK.Node();
node2.addChild(node);
node2.position = { x: 100, y: -300 }

BK.Director.root.addChild(node2);

BK.Director.ticker.setTimeout(() => {
    var tex = BK.Texture.createTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
    // var tex = BK.Texture.createTexture(sp.size.width, sp.size.height);
    debugger




    // //使用renderToTexture时,
    // node2.transform.matrix.set(1, 0, 0, 1, 0, 0);
    // BK.Render.renderToTexture(node2, tex);

    //不使用renderToTexture时
    node2.transform.matrix.set(1, 0, 0, 1, 0, -BK.Director.screenPixelSize.height);
    // BK.Render.renderToTexture(node2, tex);



    BK.Director.ticker.setTimeout(() => {
        debugger
        node2.transform.matrix.set(1, 0, 0, 1, node2.position.x, node2.position.y);

        // tex.writeToDisk("GameSandBox://test.png");
        // let ntexture = new BK.Texture("GameSandBox://test.png");
        let image = new BK.Sprite(tex.size.width, tex.size.height, tex, 0, 1, 1, 1);
        image.position = { x: 300, y: -BK.Director.screenPixelSize.height }
        let node5 = new BK.Node();
        node5.addChild(image);
        BK.Director.root.addChild(node5);
    }, 3000)
}, 4000)
