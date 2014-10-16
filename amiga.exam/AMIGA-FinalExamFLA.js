(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.AMIGAFinalExamFLA = function() {
	this.initialize();

	// Head
	this.charMC = new lib.m_head();
	this.charMC.setTransform(453.7,301.8);

	// Buttons
	this.muteMC = new lib.muteMC();
	this.muteMC.setTransform(49,340,1.922,1.922);

	this.finishMC = new lib.completeMC();
	this.finishMC.setTransform(236.6,337.1,2.104,2.104);
	this.finishMC.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,0,4);

	// Instructions
	this.text = new cjs.Text("Using the skills learned in AMIGA, you are to add sound effects to the supplied program using the supplied sound tracks.\n- Export the supplied FLA for use in HTML Canvas.\n- Create a background music track, a click sound, and a roll over sound using excepts from the supplied sound files\n- The click and roll over sounds should be no more than 1 second long.\n- The background music track should be a maximum 6 second loop.\n- Add Background Music in Canvas using SoundJS and suite\n- Add mouseover and click sounds to the mute button and finish button\n- Make mute button mute and unmute the background music\n- Clean-up voicetrack.mp3 in Adobe Audition or other sound editing software\n- Add voicetrack.mp3 to the character to make the mouth animate based on the track using SoundJS.\n*The finish button goes nowhere*", "13px 'Arial'", "#006600");
	this.text.lineHeight = 15;
	this.text.lineWidth = 511;
	this.text.setTransform(22,41.8);

	this.text_1 = new cjs.Text("AMIGA Final Exam", "19px 'Arial'", "#006600");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 21;
	this.text_1.setTransform(87.1,11.7);

	this.addChild(this.text_1,this.text,this.finishMC,this.muteMC,this.charMC);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(281.4,211.7,530.6,378.6);


// symbols:
(lib.muteMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mute:0,unmute:20});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(1,1,1).p("AglgrQApAsgpAvAgLhEQAwBEgwBFAANBTQAxhTgxhS");
	this.shape.setTransform(8.7,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AgZAwIgaAAQgPAAAAgVIAAgoQAAgVAPAAIAaAAIBMhQQAQAAAAAVIAAC7QAAAVgQAAg");
	this.shape_1.setTransform(-5.2,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1}]},20).wait(20));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009900").ss(1,1,1).p("ACUAAQAAA+grArQgsArg9AAQg8AAgsgrQgrgrAAg+QAAg8ArgsQAsgrA8AAQA9AAAsArQArAsAAA8g");
	this.shape_2.setTransform(-0.1,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B2FA75","#8CFC84"],[0,1],0,14.9,0,-14.8).s().p("AhoBoQgrgrAAg9QAAg8ArgsQArgrA9AAQA9AAArArQAsAsAAA8QAAA9gsArQgrAsg9AAQg9AAgrgsg");
	this.shape_3.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},20).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16.6,31.7,31.7);


(lib.completeMC = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("FINISH", "19px 'Arial'", "#009900");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 100;
	this.text.setTransform(-1.2,-13.4);
	this.text.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,0);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(1,1,1).p("AIGiNIwLAAQg7AAgqApQgqAqAAA6QAAA7AqApQAqAqA7AAIQLAAQA7AAAqgqQAqgpAAg7QAAg6gqgqQgqgpg7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#ABFF64","#B0FFAA"],[0,1],0,14.3,0,-14.2).s().p("AoFCOQg7AAgqgqQgqgqAAg6QAAg5AqgqQAqgqA7AAIQLAAQA7AAAqAqQAqAqAAA5QAAA6gqAqQgqAqg7AAg");

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.1,-15.2,134.3,30.5);


(lib.sweatdrip = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABCAQgEgYAGg2QAIgygLhIQgEgkgHgZQAIgCAEABQAOABgEAKQgDAKABBwIAAB9QAAAKgDABIgBAAQgCAAgCgHg");
	this.shape.setTransform(1.3,13.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.6,27.1);


(lib.sweat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGDnQgDgFACgLQAEgSgFgyIgFguQAAgfgZABQgPABg0AVQgjAOgagkIgUgmIgQiDIBChLIEMg8IAiAaQAiAmADA6QADBDgKAfQgIAbgMgRQgOgWgrAIQgwAIgFAsQgGArgOANQgIAHgSAFQgLAHgCAVQgBANAEAuQACAkgMAHIgBABQgDAAgCgDg");
	this.shape.setTransform(20.4,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.8,47);


(lib.shadow4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC8D78").s().p("AgYByQgrgUgeghQgfgjABgdQABg4AXgbQAEgFAsgiQAVgQBIAVQAmAKAhAOQALAWAFAiQALBEgaBAQgOAkgpAEIgLABQggAAgkgTg");
	this.shape.setTransform(12.9,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.8,26.7);


(lib.shadow3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC8D78").s().p("AAKg1QAMAOABATQAEAngyAjQAYhWAJgVg");
	this.shape.setTransform(2.4,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,10.9);


(lib.shadow2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC8D78").s().p("AgWgUQABgTAMgOQAIAVAYBWQgxgjAEgng");
	this.shape.setTransform(2.4,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,4.8,10.9);


(lib.shadow1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC8D78").s().p("AhpADQAlAIAsgCQBWgCAsgsQgVAjglAVQgeATgfAAQgsAAgwgjg");
	this.shape.setTransform(10.6,3.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,7.7);


(lib.noseshadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A08370").s().p("Ah9DwQgNgjgXgFQgQgDgTALQgTgTgEgbQgJg4AZgVQAIgHAKgCIAIgBQgdAFgEAkQgDAUAGAaIDPAAIgXjIQgNgoACgtIgGg1IAJAZQAGgjAKgVIBFgYQBLgVAVAQQArAiAEAFQAXAbACA4QABAzhHAxQhGAug3gNQAnCDgNAkQgDANgOAKQg0gbgPA4QgbAGgbAAQgUAAgUgEg");
	this.shape.setTransform(22.3,24.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.5,48.9);


(lib.g_tongue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#790011").s().p("AiHApIghgsIATgKIBdgeQBtgaBcATIAVAOQANASglAQQglANAZAEQANACAUgBIgjAgIiPALg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-5.9,34,11.9);


(lib.g_teethTop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBJQhKgMhMgeQg+gYgEgHQgFgHgCgcIgCgaIF6gRQCEgHArAdIgHAbQhKBtieAAQgoAAgxgHg");
	this.shape.setTransform(0,-0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.7,-9,55.4,16.2);


(lib.g_teethBottom = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AixAxQhfg9gHg2IBLgiQAQgGAHAJIAWAkQASAaARADQAbAGDcgHQAMgSAPgTQAfgkAPgBQAPAAAGADQADACA5ACQASBFhPBCQhQBFhuAEIgMAAQhlAAhag7g");
	this.shape.setTransform(0,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.1,-6.3,56.2,21.7);


(lib.g_eyeLidTop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#796456").s().p("AiphbIFTAAIAACrQiehVi1Bhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-9.2,34.1,18.5);


(lib.g_eyeLidBottom = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#796456").s().p("AiVA8IAAh3QCOBRCdhKIAABwg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-6,30.1,12.1);


(lib.g_eyeLash = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmAGQAGgCAGAAQBDgcBDAEQAjACAVAIIAOALQg9gQhHANIg9APQgQAJgSAAQAAgMALgEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,-2.2,22.9,4.5);


(lib.g_eyebrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXgTIAFgIIAqAuIgIAJg");
	this.shape.setTransform(-16.6,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai4AaQBThdBrgGQA3gDAmAQIBWBPQh0gzhuAvQgjAPgfAYQgPAMgIAIg");
	this.shape_1.setTransform(0.5,-1.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-8.6,38.1,17.3);


(lib.g_eyeBall = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape.setTransform(-1.2,1.1,1.065,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAWQgJgKAAgMQAAgMAJgJQAKgJALAAQANAAAJAJQAJAKAAALQAAAMgJAKQgJAJgNAAQgLAAgKgJg");
	this.shape_1.setTransform(0,0,1.065,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F3C1D").s().p("AgcAdQgMgMAAgRQAAgPAMgNQAMgMAQAAQARAAALAMQANANAAAPQAAARgNAMQgLAMgRAAQgQAAgMgMg");
	this.shape_2.setTransform(0,0,1.065,1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-4.1,8.8,8.3);


(lib.m_eyeMovements = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{talking:0,boo:231});

	// timeline functions:
	this.frame_234 = function() {
		/* //stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(234).call(this.frame_234).wait(16));

	// eyeshapemask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhGBAQgkgTgCgaQgDgYAhghQAhggA2gIQA3gIAXAkQAWAkAAAcQAAAfgUAQQgVAQg0ADIgNAAQgpAAgggQg");
	mask.setTransform(0.3,-1);

	// eyelash
	this.instance = new lib.g_eyeLash();
	this.instance.setTransform(0.6,-4.2,1.065,1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({y:-3.5},0).wait(1).to({y:-2.8},0).wait(1).to({y:-2.1},0).wait(1).to({y:-1.4},0).wait(1).to({y:-0.7},0).wait(50).to({y:-1.5},0).wait(1).to({y:-2.3},0).wait(1).to({y:-3.2},0).wait(1).to({y:-4},0).wait(1).to({y:-4.8},0).wait(1).to({y:-5.6},0).wait(44).to({y:-5.3},0).wait(1).to({y:-4.9},0).wait(1).to({y:-4.5},0).wait(1).to({y:-4.1},0).wait(1).to({y:-3.7},0).wait(37).to({y:-3.5},0).wait(1).to({y:-3.4},0).wait(1).to({y:-3.2},0).wait(1).to({y:-3.1},0).wait(61).to({y:-3.5},0).wait(1).to({y:-3.8},0).wait(1).to({y:-4.2},0).wait(2).to({y:-5.6},0).wait(1).to({y:-7},0).wait(1).to({y:-8.4},0).wait(16));

	// bottomlid
	this.instance_1 = new lib.g_eyeLidBottom();
	this.instance_1.setTransform(1.7,6.8,1.065,1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({y:6.3},0).wait(1).to({y:5.8},0).wait(1).to({y:5.3},0).wait(1).to({y:4.8},0).wait(1).to({y:4.3},0).wait(1).to({y:3.8},0).wait(44).to({y:5},0).wait(1).to({y:6.2},0).wait(1).to({y:7.4},0).wait(1).to({y:8.6},0).wait(1).to({y:9.8},0).wait(37).to({y:7.7},0).wait(1).to({y:5.5},0).wait(1).to({y:3.4},0).wait(1).to({y:1.3},0).wait(61).to({y:3.1},0).wait(1).to({y:5},0).wait(1).to({y:6.8},0).wait(2).to({y:5.1},0).wait(1).to({y:3.4},0).wait(1).to({y:1.7},0).wait(16));

	// toplid
	this.instance_2 = new lib.g_eyeLidTop();
	this.instance_2.setTransform(0.9,-9.6,1.065,1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({y:-8.8},0).wait(1).to({y:-8.1},0).wait(1).to({y:-7.3},0).wait(1).to({y:-6.6},0).wait(1).to({y:-5.8},0).wait(50).to({y:-6.7},0).wait(1).to({y:-7.5},0).wait(1).to({y:-8.4},0).wait(1).to({y:-9.2},0).wait(1).to({y:-10.1},0).wait(1).to({y:-10.9},0).wait(44).to({y:-10.6},0).wait(1).to({y:-10.2},0).wait(1).to({y:-9.8},0).wait(1).to({y:-9.4},0).wait(1).to({y:-9},0).wait(37).to({y:-8.8},0).wait(1).to({y:-8.7},0).wait(1).to({y:-8.5},0).wait(1).to({y:-8.4},0).wait(61).to({y:-8.8},0).wait(1).to({y:-9.2},0).wait(1).to({y:-9.6},0).wait(2).to({y:-11},0).wait(1).to({y:-12.4},0).wait(1).to({y:-13.8},0).wait(16));

	// ball
	this.instance_3 = new lib.g_eyeBall();
	this.instance_3.setTransform(0.8,2);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({y:1.5},0).wait(1).to({y:1},0).wait(1).to({y:0.5},0).wait(1).to({y:0},0).wait(1).to({y:-0.5},0).wait(1).to({y:-1},0).wait(44).to({y:-0.4},0).wait(1).to({y:0.2},0).wait(1).to({y:0.8},0).wait(1).to({y:1.5},0).wait(1).to({y:2.1},0).wait(37).to({y:1},0).wait(1).to({y:-0.1},0).wait(1).to({y:-1.3},0).wait(1).to({y:-2.4},0).wait(61).to({y:-0.9},0).wait(1).to({y:0.5},0).wait(1).to({y:2},0).wait(2).to({y:0.8},0).wait(1).to({y:-0.4},0).wait(1).to({y:-1.5},0).wait(16));

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4B3QgzgyAAhFQAAhEAzgyQAygyBGAAQBHAAAyAyQAzAyAABEQAABFgzAyQgyAxhHABQhGgBgygxg");
	this.shape.setTransform(2.3,-2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-9,22,16.2);


(lib.m_eyeClosed = function() {
	this.initialize();

	// eyeshapemask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhGBAQgkgTgCgaQgDgYAhghQAhggA2gIQA3gIAXAkQAWAkAAAcQAAAfgUAQQgVAQg0ADIgNAAQgpAAgggQg");
	mask.setTransform(0.3,-1);

	// eyelash
	this.instance = new lib.g_eyeLash();
	this.instance.setTransform(0.6,-0.1,1.065,1,5.8);

	this.instance.mask = mask;

	// bottomlid
	this.instance_1 = new lib.g_eyeLidBottom();
	this.instance_1.setTransform(0.8,0.8,1.065,1.41);

	this.instance_1.mask = mask;

	// toplid
	this.instance_2 = new lib.g_eyeLidTop();
	this.instance_2.setTransform(0.9,-5.3,1.065,1);

	this.instance_2.mask = mask;

	// ball
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape.setTransform(-0.1,1.3,1.065,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAWQgJgKAAgMQAAgMAJgJQAKgJALAAQANAAAJAJQAJAKAAALQAAAMgJAKQgJAJgNAAQgLAAgKgJg");
	this.shape_1.setTransform(1.1,0.2,1.065,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F3C1D").s().p("AgcAdQgMgMAAgRQAAgPAMgNQAMgMAQAAQARAAALAMQANANAAAPQAAARgNAMQgLAMgRAAQgQAAgMgMg");
	this.shape_2.setTransform(1.1,0.2,1.065,1);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	// white
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah4B3QgzgyAAhFQAAhEAzgyQAygyBGAAQBHAAAyAyQAzAyAABEQAABFgzAyQgyAxhHABQhGgBgygxg");
	this.shape_3.setTransform(2.3,-2);

	this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.6,-9,22,16.2);


(lib.m_eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"talking":0,"boo":210});

	// timeline functions:
	this.frame_215 = function() {
		/* //stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(215).call(this.frame_215).wait(19));

	// right
	this.instance = new lib.g_eyebrow();
	this.instance.setTransform(-21.4,0,0.997,0.997,0,-31.6,148.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(36).to({skewX:-30,skewY:150,y:0.3},0).wait(1).to({skewX:-28.4,skewY:151.6,y:0.7},0).wait(1).to({skewX:-26.8,skewY:153.2,y:1},0).wait(1).to({skewX:-25.2,skewY:154.8,y:1.4},0).wait(1).to({skewX:-23.6,skewY:156.4,y:1.7},0).wait(1).to({skewX:-22,skewY:158,y:2.1},0).wait(1).to({skewX:-20.4,skewY:159.6,y:2.4},0).wait(1).to({skewX:-18.8,skewY:161.2,y:2.8},0).wait(1).to({y:2.7},0).wait(38).to({skewX:-18.5,skewY:161.5,y:2.4},0).wait(1).to({skewX:-18.2,skewY:161.8,y:2},0).wait(1).to({skewX:-18,skewY:162,y:1.6},0).wait(1).to({skewX:-17.7,skewY:162.3,y:1.2},0).wait(1).to({skewX:-17.4,skewY:162.6,y:0.9},0).wait(1).to({skewX:-17.1,skewY:162.9,y:0.5},0).wait(1).to({skewX:-16.9,skewY:163.1,y:0.1},0).wait(1).to({skewX:-16.6,skewY:163.4,y:-0.2},0).wait(57).to({skewX:-15.4,skewY:164.6,x:-21.3,y:-1.4},0).wait(1).to({skewX:-14.1,skewY:165.9,x:-21.2,y:-2.5},0).wait(1).to({skewX:-12.9,skewY:167.1,x:-21.1,y:-3.6},0).wait(1).to({skewX:-11.7,skewY:168.3,x:-20.9,y:-4.7},0).wait(1).to({skewX:-10.5,skewY:169.5,x:-20.8,y:-5.9},0).wait(1).to({skewX:-9.2,skewY:170.8,x:-20.7,y:-7},0).wait(52).to({skewX:-13,skewY:167,x:-20.8,y:-5.8},0).wait(1).to({skewX:-16.7,skewY:163.3,x:-20.9,y:-4.7},0).wait(1).to({skewX:-20.4,skewY:159.6,x:-21.1,y:-3.5},0).wait(1).to({skewX:-24.1,skewY:155.9,x:-21.2,y:-2.3},0).wait(1).to({skewX:-27.9,skewY:152.1,x:-21.3,y:-1.2},0).wait(1).to({skewX:-31.6,skewY:148.4,x:-21.4,y:0},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-33.7,skewY:146.3,x:-21.7,y:-0.7},0).wait(1).to({skewX:-35.8,skewY:144.2,x:-21.9,y:-1.4},0).wait(1).to({skewX:-37.9,skewY:142.1,x:-22.1,y:-2.1},0).wait(1).to({skewX:-40,skewY:140,x:-22.3,y:-2.8},0).wait(1).to({skewX:-42.1,skewY:137.9,x:-22.5,y:-3.6},0).wait(19));

	// left
	this.instance_1 = new lib.g_eyebrow();
	this.instance_1.setTransform(22.1,-2.9,0.999,0.999,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:1,rotation:8.2},0).wait(36).to({rotation:10.1,y:-3.3},0).wait(1).to({rotation:11.9,y:-3.6},0).wait(1).to({rotation:13.8,y:-4},0).wait(1).to({rotation:15.6,y:-4.3},0).wait(1).to({rotation:17.5,y:-4.7},0).wait(1).to({rotation:19.3,y:-5},0).wait(1).to({rotation:21.2,y:-5.4},0).wait(1).to({rotation:23.1,y:-5.7},0).wait(39).to({rotation:21.2,y:-4.8},0).wait(1).to({rotation:19.3,y:-3.8},0).wait(1).to({rotation:17.4,y:-2.9},0).wait(1).to({rotation:15.5,y:-1.9},0).wait(1).to({rotation:13.7,y:-1},0).wait(1).to({rotation:11.8,y:-0.1},0).wait(1).to({rotation:9.9,y:0.9},0).wait(1).to({rotation:8,y:1.8},0).wait(57).to({y:0.6},0).wait(1).to({y:-0.7},0).wait(1).to({y:-1.9},0).wait(1).to({rotation:8.1,y:-3.2},0).wait(1).to({y:-4.4},0).wait(1).to({y:-5.7},0).wait(32).to({rotation:8.2},0).wait(20).to({y:-5.2},0).wait(1).to({y:-4.8},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.9},0).wait(1).to({y:-3.4},0).wait(1).to({y:-2.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.7,x:22.3,y:-4.8},0).wait(1).to({rotation:17.1,x:22.5,y:-6.6},0).wait(1).to({rotation:21.5,x:22.7,y:-8.5},0).wait(1).to({rotation:25.7,x:22.9,y:-10.3},0).wait(1).to({rotation:29.6,x:23.1,y:-12.2},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-16.8,84.3,32.2);


(lib.g_chinShade = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shadow1();
	this.instance.setTransform(0,0,1,1,0,0,0,10.6,3.8);
	this.instance.alpha = 0.75;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.6,-3.8,21.2,7.7);


(lib.m_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{speaking:0,"boo":10});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_29 = function() {
		/* //stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 6
	this.instance = new lib.g_chinShade();
	this.instance.setTransform(3.3,6.6,0.896,0.896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.89,scaleY:0.89,y:8},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:9.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:10.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:12.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:13.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:15.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:16.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:17.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:19.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:4.2,y:16.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:5.1,y:13.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:6,y:10.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:6.9,y:7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:7.8,y:3.9},0).wait(16));

	// g_mouthShap (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhWAAQgIgEgCgHIgBgGIAVAFQAaAFAaADQBPAHArgUIAAAFQgCAHgHAFQgWARhBABIgGAAQg7AAgXgSg");
	var mask_graphics_1 = new cjs.Graphics().p("AhpABQgJgJgDgPIgBgLIAZAJQAgALAfAFQBhAOA0goIAAALQgCANgJALQgbAhhPADIgIAAQhHAAgcgjg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah7ACQgLgPgEgVIgBgRIAeANQAmAQAkAIQByAWA9g8IAAAQQgDATgKAQQgfAyhdAEIgKAAQhUAAgggzg");
	var mask_graphics_3 = new cjs.Graphics().p("AiOADQgMgVgEgcIgCgXIAjATQArAUAqAKQCDAfBGhQIgBAVQgDAZgLAVQgkBDhrAFIgLAAQhgAAgmhDg");
	var mask_graphics_4 = new cjs.Graphics().p("AigADQgOgagFgiIgCgdIAnAXQAxAaAvAMQCVAnBPhlIgBAaQgDAggNAbQgpBTh4AGIgNABQhtAAgqhVg");
	var mask_graphics_5 = new cjs.Graphics().p("AizAEQgPgggGgpIgCgiIAsAbQA2AfA1APQClAvBZh5IgBAfQgEAmgOAgQguBkiGAIIgOAAQh5AAgwhlg");
	var mask_graphics_6 = new cjs.Graphics().p("AjFAFQgRglgGgwIgCgoIAwAgQA7AjA6ASQC3A2BhiNIAAAlQgFAsgPAlQgyB2iUAIIgRABQiFAAg0h2g");
	var mask_graphics_7 = new cjs.Graphics().p("AjYAGQgSgrgHg3IgCgtIA0AkQBCApA/AUQDIA+BqihIgBAqQgEAygRAqQg3CHiiAJIgSABQiSAAg5iGg");
	var mask_graphics_8 = new cjs.Graphics().p("AjqAHQgUgxgHg9IgDgzIA5ApQBHAtBEAXQDaBGBzi1IgBAvQgFA4gSAwQg8CXivALIgUAAQieAAg+iWg");
	var mask_graphics_9 = new cjs.Graphics().p("Aj9AHQgVg2gIhEIgDg5IA9AuQBNAyBKAZQDrBPB8jKIgBA0QgGA/gUA1Qg/Coi+AMIgVABQirAAhDiog");
	var mask_graphics_10 = new cjs.Graphics().p("AhwABQgJgGgEgKIgBgIIAbAHQAiAHAhADQBoAJA3gaIAAAHQgDAJgJAHQgcAWhVACIgIAAQhMAAgegXg");
	var mask_graphics_11 = new cjs.Graphics().p("AhpAAQgJgCgDgFIgCgEIAaADQAgAEAfACQBhAEA1gNIgBAEQgCAEgJADQgaALhQABIgIAAQhHAAgcgMg");
	var mask_graphics_12 = new cjs.Graphics().p("AhigCIgMgBIgBAAIAYAAIA7ABQBbAAAxgBIAAAAIgKABIhkABIgGAAIhegBg");
	var mask_graphics_13 = new cjs.Graphics().p("AgaAAQgbABgcADIgXADIABgDQADgEAIgCQAagLBEAAQBGABAXALQAHABACAEIABADQgugKhVADg");
	var mask_graphics_14 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_15 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_16 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_17 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_18 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_19 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_20 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_21 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_22 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_23 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_24 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_25 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_26 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_27 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_28 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");
	var mask_graphics_29 = new cjs.Graphics().p("AgYAEQgZAEgaAGIgVAGIABgHQACgJAIgGQAYgXA/ACQBAABAWAWQAHAFACAJIAAAGQgqgYhPAIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2.3,y:1.1}).wait(1).to({graphics:mask_graphics_1,x:1.9,y:0.9}).wait(1).to({graphics:mask_graphics_2,x:1.5,y:0.7}).wait(1).to({graphics:mask_graphics_3,x:1.1,y:0.5}).wait(1).to({graphics:mask_graphics_4,x:0.7,y:0.3}).wait(1).to({graphics:mask_graphics_5,x:0.4,y:0.1}).wait(1).to({graphics:mask_graphics_6,x:0,y:-0.2}).wait(1).to({graphics:mask_graphics_7,x:-0.4,y:-0.4}).wait(1).to({graphics:mask_graphics_8,x:-0.8,y:-0.6}).wait(1).to({graphics:mask_graphics_9,x:-1.1,y:-0.8}).wait(1).to({graphics:mask_graphics_10,x:2.1,y:1.1}).wait(1).to({graphics:mask_graphics_11,x:3.4,y:0.1}).wait(1).to({graphics:mask_graphics_12,x:4.8,y:-0.4}).wait(1).to({graphics:mask_graphics_13,x:6.2,y:-1.4}).wait(1).to({graphics:mask_graphics_14,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_15,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_16,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_17,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_18,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_19,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_20,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_21,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_22,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_23,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_24,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_25,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_26,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_27,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_28,x:7.6,y:-2.5}).wait(1).to({graphics:mask_graphics_29,x:7.6,y:-2.5}).wait(1));

	// g_teethTop
	this.instance_1 = new lib.g_teethTop();
	this.instance_1.setTransform(0.7,-25.5,1.202,1.202,0,0,0,0.3,-11.6);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:-0.9,x:0.3,y:-12.3},0).wait(1).to({y:-12},0).wait(1).to({y:-11.8},0).wait(1).to({y:-11.5},0).wait(1).to({y:-11.2},0).wait(1).to({y:-10.9},0).wait(1).to({y:-10.7},0).wait(1).to({y:-10.4},0).wait(1).to({y:-10.1},0).to({_off:true},1).wait(20));

	// g_teethBottom
	this.instance_2 = new lib.g_teethBottom();
	this.instance_2.setTransform(0.3,26.2,1,1,0,0,0,0.1,13.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:4.5,x:0.2,y:17.2},0).wait(1).to({y:16.9},0).wait(1).to({y:16.5},0).wait(1).to({y:16.2},0).wait(1).to({y:15.8},0).wait(1).to({y:15.4},0).wait(1).to({y:15.1},0).wait(1).to({y:14.7},0).wait(1).to({y:14.4},0).to({_off:true},1).wait(20));

	// g_tongue
	this.instance_3 = new lib.g_tongue();
	this.instance_3.setTransform(-4.1,26.4,1,1,0,0,0,-2.1,13.2);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,x:-2,y:12.6},0).wait(1).to({y:12},0).wait(1).to({y:11.4},0).wait(1).to({y:10.8},0).wait(1).to({y:10.3},0).wait(1).to({y:9.7},0).wait(1).to({y:9.1},0).wait(1).to({y:8.5},0).wait(1).to({y:7.9},0).to({_off:true},1).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnpEjIAApFIPTAAIAAJFg");
	this.shape.setTransform(-1.8,-4.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-0.8,24.3,23.5);


(lib.m_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:0});

	// eyeClosed
	this.instance = new lib.m_eyeClosed();
	this.instance.setTransform(1.1,-1.5,1,1,0,0,0,1.1,-2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({_off:true},4).wait(15).to({_off:false},0).to({_off:true},4).wait(71).to({_off:false},0).to({_off:true},4).wait(42));

	// eyeOpen
	this.instance_1 = new lib.m_eyeMovements();
	this.instance_1.setTransform(1.1,-1.5,1,1,0,0,0,1.1,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-18.4,36.9,33.8);


(lib.g_head = function() {
	this.initialize();

	// Layer 1
	this.mouthMC = new lib.m_mouth();
	this.mouthMC.setTransform(1.3,60.2);

	this.eyebrows = new lib.m_eyebrows();
	this.eyebrows.setTransform(-0.8,6.1);

	this.rightEye = new lib.m_eyes();
	this.rightEye.setTransform(-17.8,16.8,1,1,0,0,180);

	this.leftEye = new lib.m_eyes();
	this.leftEye.setTransform(21,16.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24130C").s().p("AgOAQQgIgHAAgJQAAgIAIgHQAGgGAIgBQAJABAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgGgGg");
	this.shape.setTransform(-14,35.9);

	this.instance = new lib.shadow4();
	this.instance.setTransform(-18.8,17.6,1,1,0,0,0,12.9,13.3);
	this.instance.alpha = 0.578;

	this.instance_1 = new lib.noseshadow();
	this.instance_1.setTransform(12.2,28.7,1,1,0,0,0,22.2,24.4);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.shadow3();
	this.instance_2.setTransform(40.4,30.2,1,1,0,0,0,2.4,5.5);
	this.instance_2.alpha = 0.578;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#796456").s().p("AgtBlQgBgCANgtQAOgwAPgnQAqh3AHBLQAHBPgnBAQgOAagRAKQgIAFgGAAQgIAAgFgGg");
	this.shape_1.setTransform(42,28.2);

	this.instance_3 = new lib.shadow2();
	this.instance_3.setTransform(-40.1,30.2,1,1,0,0,0,2.4,5.5);
	this.instance_3.alpha = 0.578;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#796456").s().p("AATBmQgRgKgNgaQgohAAHhPQAIhLAqB3QAPAnAOAwQAMAtgBACQgFAGgIAAQgGAAgIgFg");
	this.shape_2.setTransform(-41.7,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AolIZQg4gmAHhUQAGhQgggbQgmgQgJgVQgSgZgFgeQgIg9A+guQgfgigCgrQgEhTCRgpQgZgRgSgdQgkg4Ahg4QAig4BHAKQAkAFAdAQQAOgDAQgLQAhgWAKglQARg5AqgjQA7gxBmAAIAygvQA6gpAmAeQAUAPAfA1QAIANAJgBQAKAAAWgSQAygqAggIQAogLAqAeQAbAUAWBmQAIArAJAPQANAWAXgJQA/gYAtAVQA6AZgNBdIAVAkQAVAnAAAQIA3gGQA2AFgFAzQgGAyggAhIgfAZIASALQATAQAHAUQAUBAhyBUIAHAlQAGAsgCAlQgHB2hYAAQABgLgMgGQgWgMg8AeQgPAIgOgeQgNgdgEguQgKh2A0gtQgXgHgQgSQgggkAggzQgTAAgSgNQglgaADg+QgvAAg0ATQhmAogRBiQgQgRACggQAGg/BghHQgsAMgyAEQhhAHgcgrQgZAlgkAiQhKBJg8gBIgqBPQg1BOg3gFIAwA0QAlA4g1ASIAJA6QAEA5gbgBQgTgVgVgNQgrgYgNAuIABBTQgfAAghgXg");
	this.shape_3.setTransform(0,-32.2);

	this.instance_4 = new lib.sweatdrip();
	this.instance_4.setTransform(17.9,-21.6,1,1,0,0,0,1.2,13.6);
	this.instance_4.alpha = 0.41;

	this.instance_5 = new lib.sweat();
	this.instance_5.setTransform(-16.3,-25.2,1,1,0,0,0,20.4,23.4);
	this.instance_5.alpha = 0.41;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AC8D78").s().p("AmUERIgaj2ICOiHIEcixIESgkIChDfIgLDhQg/gZgKgyQgEgRADgQIAEgNQgkgGgRgrIgKgrQhwAKgtBHQgXAjAAAiIgTgnQgOg1AMgrIAOgiQgqARgzgKIgpgPQgcA2hQAlIhJAZQgLApg2AxQgcAZgZARQAuBCgPAkQgHATgQAFIgFA2IglAHg");
	this.shape_4.setTransform(-2.6,-19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D2A567","#F7C8AB"],[0,1],0,77.6,0,21.1).s().p("AgvKCQgOgLgJgQIgHgOQiSg2hNigQgYgygPg3IgJgsQgFgJgHgRQgzAJgnhYQgfhGgNhhQgHg8ApAAQAaAAAlAVIgwiNIAZi3IApiWIDjhgIDLgRIEgBeIA3B0IAWFwQAjgQAVAFQAdAIgHAzQgMBcgcBEQgkBWgwABQgQCNhVCFQgrBDgnAmQgXBCg0ABQgQABgRgGIgOgGQgfANgbAAQgdAAgZgTg");
	this.shape_5.setTransform(0,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AheBIQgEgRAGgXIAHgTQgQgNgBgzIABgvIBWgNIAgAeQAmAkAWAgQBGBkhyAUQgeAFgVAAQhBAAgLgog");
	this.shape_6.setTransform(-30.8,51.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag6CkQhcgUAkieQAMgyAXg5IAVgwICEBGIAQALQARANAJAOQAdAtg+AiIADAiQgFAlgqAQIAFANQAFARgEALQgJAYgoAAQgWAAgggGg");
	this.shape_7.setTransform(33.4,46.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_5,this.instance_4,this.shape_3,this.shape_2,this.instance_3,this.shape_1,this.instance_2,this.instance_1,this.instance,this.shape,this.leftEye,this.rightEye,this.eyebrows,this.mouthMC);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.6,-88.2,139.3,176.8);


(lib.m_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.headMC = new lib.g_head();
	this.headMC.setTransform(3.2,79.8,1,1,0,0,0,3.2,79.8);

	this.timeline.addTween(cjs.Tween.get(this.headMC).wait(41).to({regX:0,regY:0,rotation:-1.3,x:-1.9,y:0.1},0).wait(1).to({rotation:-2.7,x:-3.7,y:0.2},0).wait(1).to({rotation:-4,x:-5.6,y:0.4},0).wait(6).to({y:0.5},0).wait(25).to({y:0.6},0).wait(26).to({y:0.7},0).wait(3).to({rotation:-1.2,x:-1.7,y:0.2},0).wait(1).to({rotation:1.5,x:2.1,y:0},0).wait(1).to({rotation:4.3,x:6,y:-0.1},0).wait(1).to({rotation:7.1,x:9.8,y:0},0).wait(43).to({rotation:5.3,x:7.4,y:-0.1},0).wait(1).to({rotation:3.5,x:4.9},0).wait(1).to({rotation:1.8,x:2.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.6,-88.2,139.3,176.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;