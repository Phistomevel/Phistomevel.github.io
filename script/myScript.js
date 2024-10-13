var env = {
	"PATH" : ["root/bin","root/usr/bin"] 
}

var root={
	"bin":{
		"jsh":`{
			if(argc <= 0){
				return 1;
			}
			var functionText="";
			for(let i = 0;i < env.PATH.length;i++ ){
				if(typeof eval(env.PATH[i].replaceAll("/",".")+"."+argv[0].replaceAll("/",".")) !== 'undefined'){
					functionText = eval(env.PATH[i].replaceAll("/",".")+"."+argv[0].replaceAll("/","."));
					break;
				}
			}
			if(functionText!==""){
				var func = new Function("argc","argv", functionText);
				func(argc-1, argv.slice(1));
			}
		}`,
		"neofetch":"",
		"ls":"",
		"env":"",
		"tee":"",
		"sudo":"",
		"cd":"",
		"cat":"",
		"tinyEdit":""
		},
	"dev":{
		"content":""
		},
	"usr":{
		"home":{},
		"bin":{}
		}
	}
