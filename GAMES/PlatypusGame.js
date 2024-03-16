if (!window.lib) { window.lib = {}; }
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.PlatypusGame2 = function() {
	this.initialize();

	// score
	this.scoreTxt = new cjs.Text("SCORE: 0", "bold 24px Arial", "#FFFFFF");
	this.scoreTxt.lineHeight = 26;
	this.scoreTxt.lineWidth = 220;
	this.scoreTxt.setTransform(23.2,18);

	/*// platypus
	this.platypus_mc = new lib.Platypus();
	this.initialize(img.cowhead)
	this.platypus_mc.setTransform(657,157.8,0.801,0.801,0,0,0,137.8,94.3);*/

	// background
	this.bg = new lib.Background();
	this.bg.setTransform(400,200,1,1,0,0,0,400,200);
	this.bg.cache(-1,-1,879,553);

	this.addChild(this.bg,this.platypus_mc, this.scoreTxt);
})

.prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875.5,549);
p.constructor = lib.PlatypusGame;

// symbols:
(lib.cliff = function() {
	this.initialize(img.cliff);
})

.prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,311);


(lib.co = function() {
	this.initialize(img.co);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,160);


(lib.cow = function() {
	this.initialize(img.cow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,253);


(lib.cow2 = function() {
	this.initialize(img.cow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,253);


(lib.cowhead = function() {
	this.initialize(img.cowhead);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,110);


(lib.cowhead2 = function() {
	this.initialize(img.cowhead2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,180);


(lib.cowl1 = function() {
	this.initialize(img.cowl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,100);


(lib.cowl2 = function() {
	this.initialize(img.cowl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,110);


(lib.cowl3 = function() {
	this.initialize(img.cowl3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,90);


(lib.cowl4 = function() {
	this.initialize(img.cowl4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,170);


(lib.cowmouth = function() {
	this.initialize(img.cowmouth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.cowmouthgifcopia = function() {
	this.initialize(img.cowmouthgifcopia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.cowtail = function() {
	this.initialize(img.cowtail);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,150);


(lib.pine = function() {
	this.initialize(img.pine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,270);


(lib.pines = function() {
	this.initialize(img.pines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,270);


(lib.tail = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cowtail();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,150);


(lib.l4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cowl4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,170);


(lib.l3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cowl3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,90);


(lib.l2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cowl2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,110);


(lib.l1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cowl1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,100);


(lib.head2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cowhead2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,170,180);


(lib.head1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cowhead();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,110);


(lib.co_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAFQgXgUALgCQADgBAPAQQAQAMABADIAAABQgBAEgEAAQgGAAgMgNg");
	this.shape.setTransform(139.9,100.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAGQgngsARADQgCAAAfAjQAgAhABgDQgBAGgEAAQgKAAgZgeg");
	this.shape_1.setTransform(141.8,97.6);

	this.instance = new lib.co();

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjPAtQgvgngSgpQgOhLAMAFQgBgBAFAdQAGAcACAEQASAoAxAjQBcBGBmgRQBfgQBYhFQAIgHAsgxQAtgygBAAQALAFgwA7QgoAvgRAPQhVBHhjAQQgUAEgVAAQhYAAhOhAg");
	this.shape_2.setTransform(85.9,130.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAOQADgTAEgEQADgEANgKQASgLABAHQABABgKAIIgLAIQgDAEgIARQgIATgCABIgBAAQgDAAADgRg");
	this.shape_3.setTransform(139.6,49.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiFfQgGgDgBgGQgBgFADgFQAbgkAOgtQAbhNgEhrQgFi7hKjXQgFgNAPgEQAPgDAEANQATAzAMAzQAeBrAMBqQANBsgJBOQgLBqguBHQgHALgFAEQgEADgFAAQgEAAgEgDg");
	this.shape_4.setTransform(136.3,72.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAOQgKgFAbgOQAZgPgBAMQAAADgUAJQgQAKgEAAIgBAAg");
	this.shape_5.setTransform(94.6,77);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHAEQAJgagEgFQgPgDgWAeQgWAhgHAAQgEAAAbghQAcggAGgDQAQgIABASQACAMgGAOQAGgKAhgHIAcgEIgVAJQgbALgFAEQgOALgYAXIAPgig");
	this.shape_6.setTransform(84.6,76.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwBYIAyhLQAKgTgBgeIgEg0QAZBNAEgBQAHgEgBgeQgBgeADAAIAFAvQgBAngZgWQAJAMgiAsQgkAtgIAAIgCgBg");
	this.shape_7.setTransform(208.2,96.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAAQANg7ALAJQgCgBgMAzQgKA1ACgBIgCAAQgOAAAOg0g");
	this.shape_8.setTransform(58.8,93.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah2CmQAAgBBMgpQArgjAjg8QAggzAUhAQAUhUAFABQARABgdBeQgZBNgNAYQglBDgtAkQhJAogTAAQgHAAAAgEg");
	this.shape_9.setTransform(124.4,105.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A67C52").s().p("AB0inQgIBsg8BhQhDB1hgANg");
	this.shape_10.setTransform(124.1,104.9);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,230,160);


(lib.BurstBalloon = function() {
	this.initialize();

	// poppedballoonshapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAALTQgEgPACgZQACgUAFgJIgDgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgBgCQgJADgYACQgugFgqhCQg6hcgUieQgJhFAKgxQAEgTAHgRIAFhgQALiGAEhEQAHh1gBhYIAhCFQAcBzAGgBQAQhFAChZQABg2gEhqQgIi7AUifQAIAvARCCQAPBvAMBCQAFAbAaB/QAMA1AHArQAQASAIAWQgEhMADheQACg9AGhsQAOBSA1DTQAvC1ALBvIAGByIAAAFIAEAoQAEBPgBA1QgCBJgNA6QgRBKghANIgHADQgMAGgNACIgPADIgGgEQAigHAEgCQAXgLANgdQAJgTAHgiQAKgyAAhEIgBg8IAHAKIAAAAIAAAAQgCgEgVj7QgIhBgMhFQgQhjgSg1IgUgyQgMgdgBgUQAAAfADA+QACA5gHAnQgBgHgMgMQgHgGgHgIIgFgEIgHgHIACATQADAcATByQAUB5ADgCQgPALgrkHQgFg7gPhGQgHgjgVhbQgShDgKg/IgEg2QgCghgJgTQgMAtAHBHIALB2QAGCxglB7QgWgcgOgqIgUhNQABAMgZD9QgRCngBA7IAEAeIADgBQASCOAxBWQAPAbAMAOQATAXAUADIArACIgUgcQghgwgBADQAHgOAlA0QALATAHAMIACgDQAMgOAcAPQgHgHgBgvQAAg5AJABQAFABABA3QAAA3gDAAIgBAAIALAHQACgUAThCQAXhQADABIABAAQAPACgeBVQgOAogRAoQAKAHgDAFIgCABIgMgFIgngGQADAEgCANQgBAMgEAOQgHAqAzgMQA2gLgXgSQgQgLgHgGQgMgLADgKQgBADArATIADACQAhAWgcAXQgVASgkAFIgNAAQgeAAgIgWgAAuDOIADgCIACABIgBABIgCAAIgCAAg");
	this.shape.setTransform(20.5,74.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("AALJjQAEgOACgMQABgNgDgEIAnAGQgDAKANALQAGAGAQALQAYASg2ALQgMACgIAAQgeAAAFgggABgJUQgrgTABgDIAMAFIACgBQADgFgJgHQAQgoAOgoQAfhVgQgCIAAAAQgEgBgWBQQgUBBgCAVIgLgHIABAAQADAAAAg4QgBg2gEgBQgKgBABA5QAAAvAIAHQgdgPgMANIgCAEQgFgNgNgSQglg0gHAOQACgDAhAwIATAcIgrgCQgUgDgTgXQgMgOgOgbQgyhWgSiOIgDABIgDgeQABg7AQinQAZj9gBgMIAUBNQAOAqAWAbQAlh7gGiwIgLh2QgHhHAMgtQAJATADAhIADA2QAKA/ASBDQAWBbAGAjQAQBGAFA7QAqEGAPgKQgDACgUh3QgSh0gEgcIgBgTIAHAGIAEAFQAHAIAHAFQAMANABAGQAHgmgBg5QgDg+gBggQACAVALAdIAUAxQASA1ARBmQALBFAIA/QAWD7ABAEIgHgKIABA8QABBEgKAyQgIAhgJAUQgNAcgXAMQgEACgiAHIAHAEQAGADAEAFIgDgCgAAqB/QABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAAgBIgBgBgAC8E8IABAAIgBAAg");
	this.shape_1.setTransform(20.9,82.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,149.2);


(lib.balloonChunk4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0A0QgZgdgFgbQgCgMAVgRIAfgWQASgNAKAAQAIAAgWARQgeATgGALQgMASARAVQAcAoAYABQAaAAAbgoIgcg1QgXgwAZAAQADgBAIAxQAIAiAiAMQgnBHgsAAQgZAAgbgfg");
	this.shape.setTransform(8.4,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("AAABQQgYgFgUgeIgbgyIAfgnQAVgVAVAAIAegPQAAAlAGAUQAIAdAaAMQgSAggLALQgSAUgTAAIgGgBg");
	this.shape_1.setTransform(8.2,8.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,16.8,16.8);


(lib.balloonChunk3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnEBQgKgLgKgaQgLgcgIgKQgFgHgVgXQgQgSgIgNQgHgNAMgVIAWgfQAZglAIgTQANgfgIgeQgEgOgSgkQgPgggDgUQAGgIAQgJIAYgNQAugdAUgQQgJgcAAABQADgFANAbQAOgLgCgBQAHAEgQAQQAKAVAOAnQAHAUAuBIQAlA5gBAnQgBApgtAkQg3AjgWATQgkAgAAAlQAAAFAHAiQACAPgGAAQgFAAgKgKgAgwi1QgeAVgCASQgBAPATAmQAWAtgIAoQgHAgghAuQgXAfAZAeQAkArADAPQAFgkAkgeIBEguQAogbAKgZQAOgggegxIgng/QgVgjgJggIgOgtIgBgCQgSASgqAegAAAkJIAAAAIAAAAg");
	this.shape.setTransform(13.4,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("AhCC4QgZgwgfgYIAshFQAcgrgDgeQgBgPgcgwQgXgoAIgXIBGgnQAbgTAQgVIAFALQAFANAGAeQAJAsAjA0QAkA0AHAbQANAtglAhQhJAzgcAdQgwAxAZA9QgXg0gOgagAgCkFIAcAKQgEAIgGAIQgIgPgKgLg");
	this.shape_1.setTransform(13.6,26.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,26.5,53.5);


(lib.balloonChunk2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhzDVQgXgXgFgWQgFgXAbgrIAng+QAOgjAjhtQAdhcAZgzQASDNgDAAQgFgBgJhCIgLhMQgGASgfBuQgXBMgZAvQgnBJgBAEQgIAfApAnQAgg/AwghQA0glBCAHQAAgIgphMQgmhGADAAQAIgCAtBPQAcAzAXArQhZABgvAgQgsAegmBRIgqgjg");
	this.shape.setTransform(14.8,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("AhsDFQgRgSgFgRQgFgTAYglIAhg3QASgpAdhgQAbhaAUgvQACAVAKBCQAIA3AAAgIAFgYQAGAlAhAuQAtBEAGAMQhLgBg0AiQgwAhghBFQgWgSgJgKg");
	this.shape_1.setTransform(14.8,25.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,29.1,49.7);


(lib.balloonChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABtEnQg7hCgXg5QgShEgMgsQgbhUgdAJQhTAWhNBsQgqA9hDB2QAVhvgEhIIgFhkQgBg4AJgqQAhhqAJg0QAPhbg3g7QBfAtAiALIgegFQgygJgHgGQAnAfgOBOQgFAYgeBaQgWA/AEBkQAFB8gFApQAUhLBKhHQBMhFBNgQQAggFAaBQQAOArAQBDQAaBMAnAnIAYAUQAPAMADAHQgShvCogyQgIghgpg1Qgqg1gKggQgOgxALgoQAIgTADgNQAFgWgIgLQgYgeg0gPIhdgWQgzgNgXgZQgfgfADg8QhTBBgDgFQAAgBArglIA0grQgDBnBVAhQAQAGBDARQA3ANAfARQAjASgIA6QgJBQAFAOQALApApA6QAxBFAMAcIhJAXQgqARgWAYQggAkAOA5QACAJAiBWQhFhJgggkg");
	this.shape.setTransform(33.2,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("ABlEkQgqgugRgnQgKgXgMgkIgSg6QgHgogJgVQgOgigXAFQhYAXhDBRQgiAnhHB5QAKg2gFiFQgFh1AWhCQAfhiAFgaQALhMgngqQA6ApA+gGIAFAOQA9gqAdgbQgDBVBHAhQAqAUBmAZQAaAKAOAIQAXAPAEAQQADAUgKAsQgKArAFAYQALApAoA6QAxBIALAYQhWAZgmAqQgwA2AgBPIhHhOg");
	this.shape_1.setTransform(33.5,38.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,66,80.9);


(lib.Balloon = function() {
	this.initialize();

	// balloonshapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1272D").s().p("AACLSQgPgGAAgSIAEgaQAFgWgCgBIAmAGQgBADATANQAVAOACAFQAFAMgRAKQgNAIgOACQgKADgIAAQgIAAgGgDgAAtKNIgDgFIAPgaQAGgRAJgjIAKgvQAHgrgFAAIgYBRQgTBAgEAUIgJgHQABgDAAg0QAAg3gFgBQgIgBAAA6QABAqAGAKIgMgFQgZgJgHAKIgQgYQglg1gHAPQABgDAiAwIAXAiIgQgEQgygRg3gnQhnhGhchyQhVhpgziGQgyiDgKiJQgPi+BbidQBeiiCuhEQCxhFC3AlQDMApBcCaQBYCVgSDUQgPCthTC7QhJClhtB8QgvA2g4AtQhQA2gRALIgKgFgAHbi6QgKADABAZQABAZAMAAQANAAgCgcQgCgZgKAAIgDAAgAE1pDQgDADA4A5QAjArAbA6QAcA8ANA/QAJBFAFAAQASABgWhgQgUhUgLgWQgag6grguQgIgKgZgTQgYgUgHAAIgCABgAgsKIIAWAFIAAAAIAAACIgWgHg");
	this.shape.setTransform(55.9,74.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCDGQgBgZAKgDQANgEACAdQACAcgNAAQgMAAgBgZgABPCCQgFAAgJhFQgNg9gcg8QgZg6gjgrQg4g5ADgDQADgGAeAZQAZATAIAKQApAuAaA6QALAWAUBSQAWBfgSAAIAAAAg");
	this.shape_1.setTransform(95.9,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMONIgBhiIgHjEIgCgyQgYgGgGgXQgDgJAIgeQACgLAEgHQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAgBIAAgBIgWgEIgYgGQhHgdhRhEQiPh4hQiTQhciqgTi2QgVjLBRifQBUimCvhRQCmhNC+AUQBeALBNAiQBVAmA6BAQA8BEAfBfQAbBUACBkQADCSgtCZQgqCMhQCGQhHB4hZBXIg3AsQgZAUgYARQgzAmgRAGIAEADQAbARADAJQAFATgRAPQgNANgUAGQgJADgJACQAKDgAAB2QAAAPgPAAQgPAAAAgPgAgHHtIgFAaQABASAOAGQAOAEASgEQAOgDANgHQASgKgFgMQgCgFgVgOQgTgOAAgCIgmgHQACABgEAXgABTFYIgJAuQgJAjgGARIgQAbIAEAEIAKAFQARgKBPg3QA5gtAvg2QBth7BJimQBSi5AQiuQASjVhZiUQhciajMgpQi3glixBFQiuBDheCjQhaCdAOC+QALCLAxCCQA0CFBVBoQBcByBmBHQA4AmAyARIAPAEIgXgiQghgvgCACQAIgOAlA0IAQAZQAHgLAZAJIALAFQgGgKAAgqQgBg5AJABQAEAAAAA3QAAA1gBADIAKAGQADgTAUhBIAYhRQAFABgIArg");
	this.shape_2.setTransform(55.8,92.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,111.6,184.9);


(lib.Cloud = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiTHOQgygGhAgnQhcg4gPgHQghgPgygBIhUgBQgPgCg2gTQgsgPgZAFQgsAIhUAeQhYAggqAIQi3AliIgcQhBgNgugXQhKglAWguQARglA4gdQAqgWA1gNQAXgFADgPQAAgUAGgOQAWg0BGgRQA0gNAvhCQA6hTAdgVQBAguBKgQQBQgRBFAZQAmANASgJQANgHAlghQA0gmAygSQAOgFAmACQAkACAMgIQASgMAZgiQAcglAOgMQA5gxBUgTQBRgTBQAOQBWAOA9AvQBDAzAYBQIAHAdQAEAHAVABIBVAAQB8gCBIAJQBsAOA2AzQBAA8gbBjQBBADAmARQA9AagVA1QBfAUA/AkQAYAOAbAcQAmAoAJAHQAaAXBSAGQBJAGAdAjIABACQAmAyhUAfQg0AThPAHIhDAGQgnABgcgEQgwgIgugQQgrAFgzABQhWAChMgOQgTgDg/gYQgzgTgeACQgiACgqgJQgwgMgbgFQhIgOhHAGQhSAHg2AgQhbA1g1AVQhDAag9AAIgcgBgAmFFEQAwAbBdA6QBSArBKgGQBGgGBRgoICNhPIhggMQhSgMABgJQAAgEB6AKICIAMQBkAJA9gGQAmgFAYgIQAjgLASgVQACgDALgcQAKgcgCAAQATgDgnBMQgNAXgiANQgWAIglAFQAmARBCAGQA3AGgTgOQAVAAASAIQgPADAVAJQAQAHALACQAyAPAhAFQBqASB8gNIgZgMQgWgLACgCQABgCBLATIBWAXQBIAOBJgJQBPgJA1gjIAFgDQB8hSmTABQgDgGApgKQAigJAOgCQgjg9hbgwQhmg2guAzQAMAHAegBQAfAAAOAIQAqAWAFAqQgkBzgQgTQAphOgFgSQgOg8hKADQgoAChKAaQBEg+ANgqQATg7hkgGIh9AAQhuACgBgDQgCgIBWgJIBbgJQA4gXgphIQglhAgugUQhEgch1gCQiDADg7gDQgwgBAAgEQgFg9gjgwQghgtg4geQgxgbg+gNQiLgdhxBRQhCAwglA3QgNASAnAiQAeAbAZAMQgDgHgDgJQADgCAGALQAGALgCAEQgEAFg/gqQhFgsgIgCQg1gJhbA+QhRA3gGA9QgHA+BGBAQhAgVgvAAQg+gBgsAgQglAbAXAsQAFALANASQAJAOgEAEQgKAMgVgwQgWgxALgTQAXgoA5gKIAxgEQAcgEASgJQgUgeADgnQADgjAVggQh3g8iDA7QiBA6gqB9QAtAAAAAHQgxAMgxAPQhkAfgHApQgPBTBhgOIBIgPQAjgIAEAJQAGAOhHAMQhEAMgUgFQgPgEgngYQgXgPgkAMQgtAPghASQhEAmAfAqQAbAjBGAOQCvAhCqgcQBegPBhgjQASgGAjgPQAggLAXAEQALACA6ATQApANAfgDIA5gFIACAAQAeAAAXANg");
	this.shape.setTransform(0.4,0.4,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkbGUQgygjgagQQgwgcgkADQhjAJhDgZQgagNgJgDQgNgFgXAJIhRAeQjLBEi5gKQhagFgqgIQhWgQgegmQgjgsBAgqQArgdA7gPQAhgHAJgHQALgJAFgcQAMg4BNgXQA5gQA3hJQBAhXApgYQBIgsBPgFQAegCAvARQAyASAXABQAJAAATgVIAYgbQAhgaAlgSQAvgXAhgDQAKgBAdAJQANAEARgWQBliJCFgZQBIgOBHAQQBJAPA7ArQBEAyAYBCQAHATABAWQAEAMAfABIBdAAQC5gBBVAdQCZA1guCVQBBACAoAQQA/AYgaAzQAOgZARgFQAPgDAHAMQAHAMgNAIQgNAKgfgGQBlAVBAAjQATALA0AxQAoAlAiAGQBFANAzAUQBVAkg3AmQhSA3iAgHQiSgThIgBQhUAAgqgBQhIgCg1gMIhbgYQgzgNgqgCQg2gDgtgbQghADgzgBQgvgFgZgCQgrgDgbAPQhoA8goASQhSAnhIAFIgVAAQhUAAhRgvg");
	this.shape_1.setTransform(0.5,0.2,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkXGUQgygjgbgQQgvgcglADQhjAJhDgZQgagNgIgDQgNgFgXAJIhRAeQjLBEi6gKQhZgFgqgIQhXgQgegmQgigsA/gqQAsgdA6gPQAigHAIgHQALgJAGgcQAMg4BNgXQA4gQA3hJQBAhXApgYQBJgsBOgFQAegCAvARQAzASAXABQAJAAASgVIAZgbQAggaAmgSQAvgXAggDQALgBAdAJQANAEAQgWQBmiJCFgZQBIgOBGAQQBKAPA6ArQBFAyAXBCQAHATACAWQAEAMAeABIBeAAQC4gBBWAdQCYA1guCVQBCACAnAQQBAAZgcA0QBfATA8AfQBRApAhBCQgPggASgIQAPgIAYALQAZALgGAMQAAADgCACQgGAGgTACIgOACQAWAKArALQBkAYARAVQAhAohsAhQh3AniRgfQg0gLhdABQhmACgrgHQgigEhWgXQhJgUgvgCQg2gDgugbQggADgzgBQgwgFgYgCQgsgDgaAPQhoA8goASQhTAnhIAFIgUAAQhUAAhRgvg");
	this.shape_2.setTransform(0.1,0.2,0.9,0.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.3,-41.3,255.5,83.5);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bodyShapes
	this.instance = new lib.co_1("synched",0);
	this.instance.setTransform(61.8,50.4,1,1,0,0,0,115,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-29.5,230,160);


(lib.BalloonPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smallChunk1
	this.instance = new lib.balloonChunk4("synched",0);
	this.instance.setTransform(19.1,96.1,1,1,49.1,0,0,8.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:8.4,regY:8.4,rotation:-52.2,x:-36.7,y:137.2},0).to({_off:true},1).wait(8));

	// smallChunk2
	this.instance_1 = new lib.balloonChunk4("synched",0);
	this.instance_1.setTransform(19.1,16.2,1,1,114.5,0,0,8.4,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-8.7,y:-29.6},0).to({_off:true},1).wait(8));

	// midChunk1
	this.instance_2 = new lib.balloonChunk2("synched",0);
	this.instance_2.setTransform(15.9,50.8,1,1,0,0,0,14.6,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:9,x:-44.5,y:21.3},0).to({_off:true},1).wait(8));

	// midChunk2
	this.instance_3 = new lib.balloonChunk3("synched",0);
	this.instance_3.setTransform(91.7,84,1,1,0,0,0,13.2,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:13.3,rotation:9,x:154.3,y:92},0).to({_off:true},1).wait(8));

	// bigChunk
	this.instance_4 = new lib.balloonChunk1("synched",0);
	this.instance_4.setTransform(65,34.3,1,1,0,0,0,33,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:79.5,y:-17},0).to({_off:true},1).wait(8));

	// flatBalloon
	this.instance_5 = new lib.BurstBalloon("synched",0);
	this.instance_5.setTransform(56.1,143.9,1,0.805,0,0,0,23.4,138.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({regX:20.4,regY:74.6,scaleY:1,x:53.1,y:79.9},0).to({scaleY:1,skewX:-5,x:46.4},2).to({scaleY:1,skewX:4.6,x:59.2},3).wait(1).to({scaleY:1,skewX:2.3,x:56.1,y:79.8},0).wait(1).to({scaleY:1,skewX:0,x:53.1,y:79.9},0).wait(1));

	// string
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEE6QgBhJgFiTIgKjZIgFiQIgChMQgBgOAPAAQANAAABAOIADBuIAKDpQAGCMACBcIAGA/QACAwgLAJQgGAGgFAAQgMAAAAgsg");
	this.shape.setTransform(58.2,150.5,1,0.961);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-6,103.6,191);


(lib.Background = function() {
	this.initialize();

	// cliff
	this.instance = new lib.cliff();
	this.instance.setTransform(0,89);

	// FlashAICB
	this.instance_1 = new lib.Cloud("synched",0);
	this.instance_1.setTransform(629.6,340.6,0.51,0.32,0,46.1,0);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Cloud("synched",0);
	this.instance_2.setTransform(334.6,280.6,0.66,0.555,0,-44.4,0);
	this.instance_2.alpha = 0.48;

	this.instance_3 = new lib.Cloud("synched",0);
	this.instance_3.setTransform(297.6,98.6,1.4,1.408,0,-6.1,180);

	this.instance_4 = new lib.Cloud("synched",0);
	this.instance_4.setTransform(666.6,195.6,1.31,1.293,0,50.2,0);
	this.instance_4.alpha = 0.629;

	this.instance_5 = new lib.pines();
	this.instance_5.setTransform(215.3,279);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7ECCB","#48A6AD"],[0,1],0,210,0.1,-209.8).s().p("Eg+fAfPMAAAg+eMB8/AAAMAAAA+eg");
	this.shape.setTransform(400,200);

	this.addChild(this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875.5,549);


(lib.PlatypusPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l4
	this.instance = new lib.l4("synched",0);
	this.instance.setTransform(195.2,285.1,1,1,0,0,0,35.1,96.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:23.8,regY:45.1,rotation:-46.8,x:183.9,y:233.9},0).wait(1).to({rotation:-101.2,x:217.6,y:200.1},0).wait(1).to({rotation:-190.3,x:217.5,y:211.4},0).wait(6).to({startPosition:0},0).wait(1));

	// balloon
	this.instance_1 = new lib.BalloonPop("synched",0);
	this.instance_1.setTransform(129.1,91.1,1,1,0,0,0,55.8,92.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

	// l2
	this.instance_2 = new lib.cowl2();
	this.instance_2.setTransform(52.8,271.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{rotation:0,x:52.8,y:271.2}}]}).to({state:[{t:this.instance_2,p:{rotation:109.3,x:98.2,y:246.4}}]},1).to({state:[{t:this.instance_2,p:{rotation:146.3,x:106.5,y:257.4}}]},1).to({state:[{t:this.instance_2,p:{rotation:165,x:107.6,y:265.8}}]},1).to({state:[{t:this.instance_2,p:{rotation:165,x:107.6,y:265.8}}]},6).wait(1));

	// head
	this.instance_3 = new lib.head2("synched",0);
	this.instance_3.setTransform(24,158.6,1,1,0,0,0,85,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2},3).to({rotation:0},3).to({regY:90.1,rotation:-10.8},3).wait(1));

	// body
	this.instance_4 = new lib.Body("synched",0);
	this.instance_4.setTransform(132.1,185.1,1,1,0,0,0,80,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-11,x:132.2,y:184.3,startPosition:3},4).wait(6));

	// tail
	this.instance_5 = new lib.tail("synched",0);
	this.instance_5.setTransform(193.9,178.6,1,1,-28.9,0,0,6.3,33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({rotation:-72.2,y:178.5},0).wait(1).to({regX:6.4,rotation:-132.5,x:213.7,y:189.6},0).wait(6).to({startPosition:0},0).wait(1));

	// l3
	this.instance_6 = new lib.l3("synched",0);
	this.instance_6.setTransform(156.4,317.1,1,1,0,0,0,25,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:28.7,regY:12.6,rotation:-41,x:160.2,y:284.7},1).to({regY:12.5,rotation:-69.2,x:185.1,y:272.2},1).to({regY:12.6,rotation:-98.7,x:192.6,y:262.2},1).to({regX:28.8,rotation:-129.7,y:262.1},1).to({startPosition:0},5).wait(1));

	// l1
	this.instance_7 = new lib.l1("synched",0);
	this.instance_7.setTransform(52.8,302.5,1,1,0,0,0,25,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:35,regY:28.7,rotation:110.1,x:62.8,y:281.3},4).to({startPosition:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-59.1,375.6,440.3);


(lib.PlatypusIdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.head1("synched",0);
	this.instance.setTransform(21.8,171.9,1,1,0,0,0,60,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:60.1,regY:55.1,rotation:13,x:21.9,y:172},14,cjs.Ease.get(1)).to({regX:60,regY:55,rotation:0,x:21.8,y:171.9},16).to({startPosition:0},1,cjs.Ease.get(1)).wait(1));

	// balloon
	this.balloon = new lib.Balloon();
	this.balloon.setTransform(129.9,3.9,1,1,0,0,0,56.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.balloon).wait(32));

	// leg4
	this.instance_1 = new lib.l4("synched",0);
	this.instance_1.setTransform(195.1,274.6,1,1,0,0,0,35,85);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-16.7,x:207.4,y:277.1},7).to({rotation:0,x:195.1,y:274.6},7).to({rotation:24.5,x:166.2,y:274.3},8).to({rotation:0,x:195.1,y:274.6},9).wait(1));

	// leg2
	this.instance_2 = new lib.l2("synched",0);
	this.instance_2.setTransform(86.8,273.4,1,1,0,0,0,30.1,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:47.5},7).to({rotation:0},7).to({regY:17.7,rotation:-30.8,y:273.3},8).to({regY:17.8,rotation:0,y:273.4},9).wait(1));

	// body
	this.instance_3 = new lib.Body("synched",0);
	this.instance_3.setTransform(132.1,185.1,1,1,0,0,0,80,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(32));

	// leg3
	this.instance_4 = new lib.l3("synched",0);
	this.instance_4.setTransform(162.3,313.6,1,1,0,0,0,25,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.5,regY:45.5,rotation:10,x:154.8,y:312.8},7).to({regX:25,regY:45,rotation:0,x:162.3,y:313.6},8).to({regX:30.6,regY:50.8,rotation:-21.3,x:169.7,y:316.9},8).to({regX:25,regY:45,rotation:0,x:162.3,y:313.6},8).wait(1));

	// tail
	this.instance_5 = new lib.tail("synched",0);
	this.instance_5.setTransform(238,220.7,1,1,0,0,0,40,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:30,regY:75.9,rotation:11.2,x:219.4,y:218.7},7).to({regX:40,regY:75,rotation:0,x:238,y:220.7},8).to({rotation:-5.8},8).to({rotation:0},8).wait(1));

	// leg1
	this.instance_6 = new lib.l1("synched",0);
	this.instance_6.setTransform(57,277.1,1,1,0,0,0,30.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-45.7},7).to({rotation:0},8).to({rotation:58.4,x:56.9,y:277.2},8).to({rotation:0,x:57,y:277.1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.1,0.2,316.2,365.4);


(lib.Platypus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,pop:60,fall:65});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_60 = function() {
		playSound("pop");
	}
	this.frame_64 = function() {
		if (this.onPopped) { this.onPopped(this); }
	}
	this.frame_69 = function() {
		this.gotoAndPlay("fall");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1).call(this.frame_60).wait(4).call(this.frame_64).wait(5).call(this.frame_69));

	// idle
	this.platypusIdle = new lib.PlatypusIdle();
	this.platypusIdle.setTransform(128.3,9,1,1,-5.6,0,0,128.3,9);

	this.timeline.addTween(cjs.Tween.get(this.platypusIdle).to({regY:9.1,rotation:-1.8,x:128.4,y:12.2},11,cjs.Ease.get(-0.99)).to({rotation:0,x:128.3,y:14.1},3).to({regY:9,rotation:3.7,x:128.4,y:9.1},16,cjs.Ease.get(1)).to({regX:128.8,regY:9.5,rotation:0.3,x:128.8,y:14},14,cjs.Ease.get(-0.99)).to({regX:128.3,regY:9,rotation:-5.5,x:128.3,y:9},15,cjs.Ease.get(1)).to({_off:true},1).wait(10));

	// pop and fall
	this.instance = new lib.PlatypusPop("synched",0);
	this.instance.setTransform(126.7,167.7,1,1,0,0,0,127.6,165.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({startPosition:0,_off:false},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-14.6,351,395);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;