webpackJsonp([1],{"/UCy":function(t,e){},"/eHI":function(t,e){t.exports={version:"0.20.7"}},0:function(t,e){},1:function(t,e){},"4FuK":function(t,e){t.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},HBSQ:function(t,e){},J20r:function(t,e){t.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],payable:!0,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("xd7I"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container22",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("C7Lr")({name:"App"},s,!1,function(t){n("/UCy")},null,null).exports,o=n("3XdE"),r=n("IKiI"),c=n("4YfN"),u=n.n(c),l=(n("FBGu"),n("Y/Kc"),{1:"Main Net",2:"Deprecated Morden test network",3:"Ropsten test network",4:"Rinkeby test network",42:"Kovan test network",4447:"Truffle Develop Network",5777:"Ganache Blockchain"}),p=n("2bvH"),m={props:["message"],name:"miracle-data",computed:u()({},Object(p.b)({isInjected:function(t){return t.web3.isInjected},network:function(t){return l[t.web3.networkId]},networkId:function(t){return t.web3.networkId},coinbase:function(t){return t.web3.coinbase},balance:function(t){return t.web3.balance},httpUrl:function(t){return"https://"+document.domain+"?code="+t.web3.coinbase},ethBalance:function(t){if(null!==t.web3.web3Instance)return t.web3.web3Instance().fromWei(t.web3.balance,"ether")}}),{shouyiList:function(){return[{name:this.$t("joinbox.Onelist01"),value:"---"},{name:this.$t("joinbox.Onelist02"),value:"---"},{name:this.$t("joinbox.Onelist05"),value:"---"},{name:this.$t("joinbox.Onelist04"),value:"---"},{name:this.$t("joinbox.Onelist03"),value:"---"},{name:this.$t("joinbox.Onelist06"),value:"---"},{name:this.$t("joinbox.Onelist07"),value:"---"},{name:this.$t("joinbox.Onelist08"),value:"---"}]},yejiList:function(){return[{name:this.$t("joinbox.Twolist01"),value:"---"},{name:this.$t("joinbox.Twolist02"),value:"---"},{name:this.$t("joinbox.Twolist03"),value:"---"}]},dataList:function(){return[{name:this.$t("joinbox.Threelist01"),value:"---"},{name:"V1",value:"---"},{name:"V2",value:"---"},{name:"V3",value:"---"},{name:"V4",value:"---"}]},levels:function(){return["--",this.$t("vip.vip1"),this.$t("vip.vip2"),this.$t("vip.vip3")]}}),data:function(){return{tokenAlert:!1,tabList:{},tabNo:1,VIPS:["--","V1","V2","V3"],myFee:0,burnRatio:0}},created:function(){this.tabList=this.shouyiList},watch:{shouyiList:function(){1==this.tabNo&&(this.tabList=this.shouyiList),this.getUser()},yejiList:function(){2==this.tabNo&&(this.tabList=this.yejiList)},dataList:function(){3==this.tabNo&&(this.tabList=this.dataList)}},methods:{onCopy:function(t){this.$toastr.success(this.$t("msg.copy"))},tab:function(t){1==t?(this.tabNo=1,this.tabList=this.shouyiList):2==t?(this.tabNo=2,this.tabList=this.yejiList):(this.tabNo=3,this.tabList=this.dataList)},cleanBonus:function(t){var e=this;this.winEvent=null,this.pending=!0,this.$store.state.contractInstance().everydayBonus({gas:3e5,value:this.$store.state.web3.web3Instance().toWei(this.amount,"ether"),from:this.$store.state.web3.coinbase},function(t,n){t?(console.log(t),e.pending=!1):e.$store.state.contractInstance().Won().watch(function(t,e){t?console.log("could not get event Won()"):(console.log(t),console.log(e))})})},getUser:function(t){var e=this;this.$store.state.contractInstance().getUser({from:this.$store.state.web3.coinbase},function(t,n){t?console.log(Number(t)):(console.log(n),e.shouyiList[0].value=isNaN(Number(n[0]))?"--":e.levels[Number(n[0])],e.shouyiList[1].value=e.VIPS[Number(n[1])],e.shouyiList[2].value=e.fromWei(n[2])+" ETH",e.shouyiList[3].value=e.fromWei(n[3])+" ETH",e.shouyiList[4].value=e.fromWei(n[4])+" ETH",e.shouyiList[5].value=e.fromWei(n[5])+" ETH",e.shouyiList[6].value=e.fromWei(n[6])+" ETH",e.shouyiList[7].value=e.fromWei(n[7])+" ETH",e.myFee=n[6])}),this.$store.state.contractInstance().getUserData({from:this.$store.state.web3.coinbase},function(t,n){t?console.log(t):(console.log(n),e.yejiList[0].value=Number(n[0]),e.yejiList[1].value=e.fromWei(n[1])+" ETH",e.yejiList[2].value=e.fromWei(n[2])+" ETH")}),this.$store.state.contractInstance().getGuDong({from:this.$store.state.web3.coinbase},function(t,n){if(t)console.log(t);else for(var a=0;a<=4;a++)e.dataList[a].value=Number(n[a])})},fromWei:function(t){return t>0?this.$store.state.web3.web3Instance().fromWei(t,"ether"):0},getLevels:function(t){var e=this;this.$store.state.contractInstance().getLevels(1,{from:this.$store.state.web3.coinbase},function(t,n){t?console.log(t):(console.log(t),console.log(Number(n[0])),console.log(n),e.number=n)})},cash:function(){var t=this;if(this.myFee<=0)return this.$toastr.warning(this.$t("msg.mag2")),!1;this.$store.state.contractInstance().cash({gas:3e5,value:"0",from:this.$store.state.web3.coinbase},function(e,n){e?(console.log(e),t.pending=!1):t.$store.state.contractInstance().Won().watch(function(t,e){t?console.log("could not get event Won()"):console.log(e)})})}},mounted:function(){this.$store.dispatch("getContractInstance");var t=this;setTimeout(function(){if(1!=t.networkId)return t.$toastr.error(this.$t("msg.msg3")),!1;t.getUser()},1e3)}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"joinbox"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-md-8 offset-md-2"},[n("ul",{staticClass:"nav nav-tabs jointab",attrs:{role:"tablist"}},[n("li",{attrs:{role:"presentation"}},[n("a",{class:{active:1==t.tabNo},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.tab(1)}}},[t._v(t._s(t.$t("joinbox.tab01")))])]),t._v(" "),n("li",{attrs:{role:"presentation"}},[n("a",{class:{active:2==t.tabNo},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.tab(2)}}},[t._v(t._s(t.$t("joinbox.tab02")))])]),t._v(" "),n("li",{attrs:{role:"presentation"}},[n("a",{class:{active:3==t.tabNo},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.tab(3)}}},[t._v(t._s(t.$t("joinbox.tab03")))])])]),t._v(" "),n("div",{staticClass:"tab-content"},[n("div",{staticClass:"tab-pane active",attrs:{role:"tabpanel",id:"tab01"}},[n("div",{staticClass:"row rulelist"},[n("div",{staticClass:"rulelistbox col-sm-12"},[n("ul",{staticClass:"list-inline"},t._l(t.tabList,function(e,a){return n("li",{key:a,staticClass:"list-inline row"},[n("div",{staticClass:"col-7 text-left"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"col-5 text-right"},[n("span",[t._v(t._s(e.value))])])])}),0)])])]),t._v(" "),n("div",{staticClass:"row"},[n("br"),t._v(" "),n("div",{staticClass:"col-md-6 offset-md-3"},[n("button",{staticClass:"btn btn-outline-primary btn-block withdrawBtn",attrs:{type:"button"},on:{click:t.cleanBonus}},[t._v(t._s(t.$t("joinbox.clean")))])])]),t._v(" "),n("div",{staticClass:"row"},[n("br"),t._v(" "),n("div",{staticClass:"col-md-6 offset-md-3"},[n("button",{staticClass:"btn btn-outline-primary btn-block withdrawBtn",attrs:{type:"button"},on:{click:t.cash}},[t._v(t._s(t.$t("joinbox.cash")))])])]),t._v(" "),n("div",{staticClass:"row"},[n("br"),t._v(" "),n("div",{staticClass:"col-md-6 offset-md-3"},[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copyhttplist",value:t.httpUrl,expression:"httpUrl",arg:"copyhttplist"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn btn-outline-primary btn-block withdrawBtn",attrs:{type:"button"}},[t._v(t._s(t.$t("joinbox.recommend")))])])])])])])])])},staticRenderFns:[]};var b={name:"miracle-dapp",data:function(){return{menuShow:!1,tokenAlert:!1,amount:1,pending:!1,winEvent:null,EthToSIN:30,paySIN:.01,MySIN:0,burnRatio:30,TotalFee:"000000",html:""}},beforeCreate:function(){this.$store.dispatch("registerWeb3")},computed:{inpNum:function(){return this.oldNum}},created:function(){this.tabList=this.shouyiList},components:{"mitacle-data":n("C7Lr")(m,d,!1,function(t){n("bbDc")},"data-v-5a43b2ff",null).exports},methods:{menuTag:function(){this.menuShow?this.menuShow=!1:this.menuShow=!0},tag:function(t){this.menuShow=!1,"sg"===t?(r.a.set("lang","sg"),this.$i18n.locale="sg"):(this.$i18n.locale="en",r.a.set("lang","en"))},buyNumber:function(t){this.amount=t},change:function(t){var e=t.target.value.trim();/^\d+(\.\d{1,4})?$/.test(e)?this.paySIN=e:this.paySIN="",this.EthToSIN=3e3*this.paySIN,console.log()},tokenModal:function(t){this.tokenAlert="close"!=t},tab:function(t){1==t?(this.tabNo=1,this.tabList=this.shouyiList):2==t?(this.tabNo=2,this.tabList=this.yejiList):(this.tabNo=3,this.tabList=this.dataList)},addOrder:function(t){var e=this;if(!this.$route.query.code)return this.$toastr.warning(this.$t("msg.msg4")),!1;if(!this.$store.state.web3.coinbase)return this.$toastr.error("請先登錄 Metamask 或 trustwallet！"),!1;console.log(this.MySIN);var n=this.$store.state.web3.web3Instance().toWei(this.amount,"ether");if(console.log(Number(this.burnRatio)),0==this.MySIN||this.MySIN<n*this.burnRatio)return this.$toastr.error("你的令牌不足 "+parseInt(this.amount*this.burnRatio,10)+" SIN"),!1;this.winEvent=null,this.pending=!0,this.$store.state.contractInstance().addOrder(this.$route.query.code,{gas:1e6,value:this.$store.state.web3.web3Instance().toWei(this.amount,"ether"),from:this.$store.state.web3.coinbase},function(t,n){t?(console.log(t),e.pending=!1):e.$store.state.contractInstance().OrderWon().watch(function(t,e){t?console.log("could not get event OrderWon()"):console.log(e)})})},eventTicketsBought:function(){var t=this;this.$store.state.contractInstance().TicketsBought({},{fromBlock:this.currentLotteryBlock+1,toBlock:"latest"}).watch(function(e,n){e?console.log(e):t.ticketsIssued[n.transactionIndex]={address:n.args._from,quantity:parseInt(n.args._quantity,10),name:t.getAddressName(n.args._from)}})},BuySIN:function(t){var e=this;return this.$route.query.code?this.$store.state.web3.coinbase?(this.winEvent=null,this.pending=!0,void this.$store.state.contractInstanceSIN().buy({gas:3e5,value:this.$store.state.web3.web3Instance().toWei(this.paySIN,"ether"),from:this.$store.state.web3.coinbase},function(t,n){t&&(e.pending=!1)})):(this.$toastr.error(this.$t("msg.msg3")),!1):(this.$toastr.warning(this.$t("msg.msg4")),!1)},getSIN:function(){var t=this;this.$store.state.contractInstanceSIN().balanceOf(this.$store.state.web3.coinbase,{from:this.$store.state.web3.coinbase},function(e,n){e?console.log(e):(console.log(n),t.MySIN=n)}),this.$store.state.contractInstance().burnRatio({from:this.$store.state.web3.coinbase},function(e,n){e?console.log(e):t.burnRatio=Number(n)}),this.$store.state.contractInstance().TotalFee({from:this.$store.state.web3.coinbase},function(e,n){e?console.log(e):Number(n)>0&&(t.TotalFee=2*Number(t.fromWei(Number(n)))+1500,t.html="",t.initNum())})},fromWei:function(t){return t>0?this.$store.state.web3.web3Instance().fromWei(t,"ether"):0},getUser:function(t){this.$store.state.contractInstance().getUser(this.$store.state.web3.coinbase,{from:this.$store.state.web3.coinbase},function(t,e){t&&console.log(t)})},getLevels:function(t){var e=this;this.$store.state.contractInstance().getLevels(1,{from:this.$store.state.web3.coinbase},function(t,n){t?console.log(t):e.number=n})},ani:function(){for(var t=this.$refs.loginCanv.getContext("2d"),e=this.$refs.loginCanvT.getContext("2d"),n=t.canvas,a=[],s=0,i=Math.sin,o=Math.cos,r=(Math.tan,Math.PI),c=0;c<8e3;c++){var u=c%204,l=c/204>>0;a.push([32*(-102+u),0,32*l])}!function c(){var u=i(s/100)*r/20,l=i(s/50)*r/10;s++,e.canvas.width===e.canvas.offsetWidth&&e.canvas.height===e.canvas.offsetHeight||(e.canvas.width=n.width=e.canvas.offsetWidth,e.canvas.height=n.height=e.canvas.offsetHeight),t.fillStyle="hsl(200deg, 100%, 2%)",t.fillRect(0,0,n.width,n.height),t.save(),t.translate(n.width/2,n.height/2),t.beginPath(),a.forEach(function(e,n){var a=e[0]-s%64,r=e[2]-2*s%32+(n%2==0?16:0),c=o(s/45+a/50)-i(s/20+r/50)+i(s/30+r*a/1e4),p=e[1]+16*c,m=Math.max(0,1-Math.sqrt(Math.pow(a,2)+Math.pow(r,2))/(8e3/204*32)),d=void 0,b=void 0,h=void 0;d=a,b=p-=-80,h=r,d=a*o(u)+r*i(u),p=b,r=h=-a*i(u)+r*o(u),d=(a=d)*o(u)-p*i(u),b=a*i(u)+p*o(u),a=d,r=h,b=(p=b)*o(l)-r*i(l),h=p*i(l)+r*o(l),a=d,p=b,a/=(r=h)/100,p/=r/100,m<.01||r<0||(t.globalAlpha=m,t.fillStyle="hsl("+(180+20*c)+"deg, 100%, 50%)",t.fillRect(a-3*m/2,p-3*m/2,3*m,3*m),t.globalAlpha=1)}),t.restore(),e.drawImage(n,0,0),e.globalCompositeOperation="screen",e.filter="blur(16px)",e.drawImage(n,0,0),e.filter="blur(0)",e.globalCompositeOperation="source-over",requestAnimationFrame(c)}()},initNum:function(){var t=this;this.TotalFee.toString().split("").forEach(function(e){t.html+='<span class="counter">'+e+"</span>"}),this.$refs.number.innerHTML=this.html}},mounted:function(){r.a.get("lang")&&(this.$i18n.locale=r.a.get("lang")),this.initNum(),this.$route.query.code||this.$toastr.warning(this.$t("msg.msg4")),this.ani(),this.$store.dispatch("getContractInstance");var t=this;setTimeout(function(){t.getSIN()},1e3)}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"casino"},[t._m(0),t._v(" "),n("div",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-between"},[n("div",{staticClass:"col-xl-2 col-lg-2 d-xl-flex d-lg-flex d-block align-items-center mobile-header"},[n("div",{staticClass:"row d-flex"},[t._m(1),t._v(" "),n("div",{staticClass:"col-xl-12 col-6 d-xl-none d-lg-none d-block"},[n("button",{staticClass:"navbar-toggler collapsed iconfont icon-webicon03",attrs:{type:"button"},on:{click:t.menuTag}})])])]),t._v(" "),n("div",{staticClass:"justify-content-end min-height-none"},[n("div",{staticClass:"main-menu"},[n("nav",{staticClass:"navbar navbar-expand-lg"},[n("div",{staticClass:"navbar-collapse collapse ",class:{show:t.menuShow},attrs:{id:"navbarNavAltMarkup"}},[n("ul",{staticClass:"navbar-nav nav"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0)","data-i18n":"button.english",id:"en"},on:{click:function(e){return t.tag("en")}}},[t._v(t._s(t.$t("button.english")))])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0)","data-i18n":"button.singapore",id:"sg"},on:{click:function(e){return t.tag("sg")}}},[t._v(t._s(t.$t("button.singapore")))])])])])])])])])])]),t._v(" "),n("div",{staticClass:"banner",staticStyle:{background:"#000C11"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"justify-content-center"},[n("div",{staticClass:"banner-content"},[n("h1",{staticClass:"bounceInDown animated"},[t._v("Miracle")]),t._v(" "),n("div",{ref:"number",staticClass:" bounceInDown animated"})])])]),t._v(" "),n("div",{staticClass:"banner-star"}),t._v(" "),n("canvas",{ref:"loginCanv",staticClass:"loginCan"}),t._v(" "),n("canvas",{ref:"loginCanvT",staticClass:"loginCan"})]),t._v(" "),n("div",{staticClass:"feature"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-md-6 offset-md-3"},[n("div",{staticClass:"mb-3 text-center"},[n("h2",{staticClass:"card-title text-center mt-1"},[n("span",{attrs:{"data-i18n":"feature.h2"}},[t._v(t._s(t.$t("feature.h2")))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"c-blue"},[t._v(t._s(t.burnRatio)+"SIN/ETH")])]),t._v(" "),n("form",{staticClass:"tabform"},[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control",attrs:{type:"text",min:"1",placeholder:"1 ETH","aria-label":"1 ETH","aria-describedby":"tab01eth",id:"SendethNum"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),t._m(2)]),t._v(" "),n("div",{staticClass:"tabform-btnbox"},[n("span",{staticClass:"btn btn-outline-secondary btn-lg",class:{active:1==t.amount},on:{click:function(e){return t.buyNumber(1)}}},[n("span",{staticClass:"num"},[t._v("1")]),t._v(" ETH\n                ")]),t._v(" "),n("span",{staticClass:"btn btn-outline-secondary btn-lg",class:{active:11==t.amount},on:{click:function(e){return t.buyNumber(11)}}},[n("span",{staticClass:"num"},[t._v("11")]),t._v(" ETH\n                ")]),t._v(" "),n("span",{staticClass:"btn btn-outline-secondary btn-lg",class:{active:21==t.amount},on:{click:function(e){return t.buyNumber(21)}}},[n("span",{staticClass:"num"},[t._v("21")]),t._v(" ETH\n                ")])]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-block btn-primary tabbuy",attrs:{type:"button"},on:{click:t.addOrder}},[n("span",{attrs:{"data-i18n":"feature.send"}},[t._v(t._s(t.$t("feature.send")))]),t._v(" ETH\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-block mt-3",attrs:{type:"button"},on:{click:t.tokenModal}},[t._v(t._s(t.$t("feature.t01"))+t._s(t.$t("feature.t02")))])])])])])])]),t._v(" "),n("mitacle-data"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tokenAlert,expression:"tokenAlert"}],staticClass:"modal fade",class:{show:t.tokenAlert},staticStyle:{display:"block"},attrs:{id:"GameModal"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"GameModalTitle","data-i18n":"GameModal.title"}},[t._v(t._s(t.$t("feature.t02")))]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.tokenModal("close")}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[t._m(3),t._v(" "),n("form",{staticClass:"tabform"},[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paySIN,expression:"paySIN"}],staticClass:"form-control",attrs:{type:"number",placeholder:"1 ETH","aria-label":"1 ETH"},domProps:{value:t.paySIN},on:{input:[function(e){e.target.composing||(t.paySIN=e.target.value)},t.change],change:t.change}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text",attrs:{id:"tab02eth"}},[n("span",{attrs:{id:"totalpcc"}},[t._v(t._s(t.EthToSIN))]),t._v(" SIN")])])]),t._v(" "),n("div",{staticClass:"input-group"},[n("button",{staticClass:"btn submit-btn btn-block tabbuy",attrs:{type:"button","data-i18n":"GameModal.buy"},on:{click:t.BuySIN}},[t._v(t._s(t.$t("GameModal.buy")))])])])])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tokenAlert,expression:"tokenAlert"}],staticClass:"modal-backdrop fade show"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preloader",staticStyle:{display:"none"}},[e("div",{staticClass:"loader"},[e("hr"),e("hr")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xl-12 col-lg-12 col-6 d-flex align-items-center"},[e("div",{staticClass:"logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"static/img/logo.png",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",attrs:{id:"tab01eth"}},[this._v("ETH")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"card-title text-center"},[e("span",{staticClass:"c-blue"},[this._v("1ETH=3000SIN")])])}]};var y=n("C7Lr")(b,h,!1,function(t){n("t0zf")},"data-v-66e36fd9",null).exports;a.a.use(o.a);var v=new o.a({mode:"history",routes:[{path:"/",name:"miracle-dapp",component:y}]}),f={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null},contractInstance:null,contractInstanceSIN:null},g=n("aA9S"),w=n.n(g),_=n("rVsN"),C=n.n(_),I=n("x2B/"),$=n.n(I),x=new C.a(function(t,e){var n=window.web3;if(void 0!==n){var a=new $.a(n.currentProvider);t({injectedWeb3:a.isConnected(),web3:function(){return a}})}else e(new Error("Unable to connect to Metamask"))}).then(function(t){return new C.a(function(e,n){t.web3().version.getNetwork(function(a,s){a?n(new Error("Unable to retrieve network ID")):(t=w()({},t,{networkId:s}),e(t))})})}).then(function(t){return new C.a(function(e,n){t.web3().eth.getCoinbase(function(a,s){a?n(new Error("Unable to retrieve coinbase")):(t=w()({},t,{coinbase:s}),e(t))})})}).then(function(t){return new C.a(function(e,n){t.web3().eth.getBalance(t.coinbase,function(a,s){a?n(new Error("Unable to retrieve balance for address: "+t.coinbase)):(t=w()({},t,{balance:s}),e(t))})})}),k=function(t){var e=window.web3;e=new $.a(e.currentProvider),setInterval(function(){if(e&&L.state.web3.web3Instance)if(e.eth.coinbase!==L.state.web3.coinbase){var t=e.eth.coinbase;e.eth.getBalance(e.eth.coinbase,function(e,n){e?console.log(e):L.dispatch("pollWeb3",{coinbase:t,balance:parseInt(n,10)})})}else e.eth.getBalance(L.state.web3.coinbase,function(t,e){t?console.log(t):parseInt(e,10)!==L.state.web3.balance&&L.dispatch("pollWeb3",{coinbase:L.state.web3.coinbase,balance:e})})},500)},N=[{constant:!1,inputs:[{name:"_number",type:"uint256"}],name:"set",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_code",type:"address"}],name:"addOrder",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"everydayBonus",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"_levelid",type:"uint256"}],name:"getLevels",outputs:[{name:"ProfitMin",type:"uint256"},{name:"ProfitMax",type:"uint256"},{name:"AmountMin",type:"uint256"},{name:"AmountMax",type:"uint256"},{name:"leverage",type:"uint256"}],payable:!1,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"get",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"getUser",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"getBalance",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getTotal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TotalFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getGuDong",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"burnRatio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getUserData",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"cash",outputs:[{name:"",type:"uint256"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_number",type:"uint256"}],name:"bet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"houseEdge",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_houseEdge",type:"uint256"}],payable:!0,stateMutability:"payable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"_status",type:"bool"},{indexed:!1,name:"_amount",type:"uint256"}],name:"Won",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_status",type:"bool"},{indexed:!1,name:"_code",type:"uint256"}],name:"OrderWon",type:"event"}],T=new C.a(function(t,e){t(new $.a(window.web3.currentProvider).eth.contract(N).at("0xaa090b9143c61b08259e185088119c971fa6707c"))}),M=[{constant:!1,inputs:[],name:"buy",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"_number",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"burnRatio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"burnRatio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],S=new C.a(function(t,e){t(new $.a(window.web3.currentProvider).eth.contract(M).at("0x1c83a7be00e45f36c94faea539b7981e3bdc9f88"))});a.a.use(p.a);var L=new p.a.Store({strict:!0,state:f,mutations:{registerWeb3Instance:function(t,e){var n=e,a=t.web3;a.coinbase=n.coinbase,a.networkId=n.networkId,a.balance=parseInt(n.balance,10),a.isInjected=n.injectedWeb3,a.web3Instance=n.web3,t.web3=a,k()},pollWeb3Instance:function(t,e){t.web3.coinbase=e.coinbase,t.web3.balance=parseInt(e.balance,10)},registerContractInstance:function(t,e){t.contractInstance=function(){return e}},registerContractInstanceSIN:function(t,e){t.contractInstanceSIN=function(){return e}}},actions:{registerWeb3:function(t){var e=t.commit;x.then(function(t){e("registerWeb3Instance",t)}).catch(function(t){console.log("error in action registerWeb3",t)})},pollWeb3:function(t,e){(0,t.commit)("pollWeb3Instance",e)},getContractInstance:function(t){var e=t.commit;T.then(function(t){e("registerContractInstance",t)}).catch(function(t){return console.log(t)}),S.then(function(t){e("registerContractInstanceSIN",t)}).catch(function(t){return console.log(t)})}}}),E=(n("HBSQ"),n("QH0z")),j=n.n(E),W=(n("yAAI"),n("qC7U")),O=n.n(W),A=n("P6bB");a.a.use(A.a);var B={sg:n("QedU"),en:n("o70q")},H=new A.a({locale:"en",messages:B});a.a.config.productionTip=!1,window.toastr=n("onxJ"),a.a.use(j.a),a.a.use(O.a),new a.a({el:"#app",router:v,store:L,components:{App:i},template:"<App/>",i18n:H})},QedU:function(t,e){t.exports={button:{singapore:"新加坡",english:"英語"},feature:{t01:"兌換",t02:"令牌",title:"參與",h2:"當前燃燒比例",noticket:"兌換令牌",send:"發送",rule:"規則"},recommend:{t01:"我的推薦人是",t02:"我的直推數量",t03:"我的邀請鏈接",copylink:"復制我的邀請鏈接",btn:"立即邀請"},ruleModal:{title:"玩法規則",list01:"壹個賬號在出局前僅接受壹筆投資，出局後可繼續投資",list02:"靜態分紅按照每天0.3%~2.2%上下浮動",list03:"動靜出局，按照1-10為投資額3倍，11-30為投資額4倍，大於31為投資額5倍",list04:"動態推薦25%按照:10%->8%->7%獲取動態獎勵，可即時提現",list05:"獎池達到指定時間後，小獎池不再沉澱，直到開啟下壹輪",list06:"動態如果未達到條件，沉澱至分紅池"},GameModal:{title:"令牌",ticketTitle:"購買入場令牌",buy:"購買"},joinbox:{t01:"統計",t02:"數據",tab01:"收益",tab02:"業績",tab03:"數據",Onelist01:"玩家級別",Onelist02:"VIP等級",Onelist05:"VIP分幣收益",Onelist03:"累計分幣收益",Onelist04:"獎池收益 ",Onelist06:"当前推广收益",Onelist07:"当前待领取收益",Onelist08:"当前杠杆剩余",clean:"結算靜態收益",withdraw:"提現",cash:"提幣",recommend:"我的邀請鏈接",total:"查看我的統計數據",Twolist01:"分享ID數",Twolist02:"全體",Twolist03:"主幹",Threelist01:"令牌销毁比例",Threelist02:"已焚毀令牌",global:"全球總業績",withdrawTip:"溫馨提示：點擊提現按鈕，將提取所有可提現獎勵。"},testimonial:{t01:"抽獎",t02:"距离下次抽奖还剩",info:"獎池24小時開壹次獎，每有壹筆新投入，時間將按照1个以太延長3小時计算，獎池100%的獎金將給予最後500名投資額最大玩家。"},vip:{vip1:"銀卡",vip2:"金卡",vip3:"鑽卡"},msg:{copy:"复制成功",mag2:"账户余额足无法提现",msg3:"請先登錄 Metamask 或 trustwallet！",msg4:"推荐码不存在"}}},"R1e/":function(t,e){t.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},bbDc:function(t,e){},o70q:function(t,e){t.exports={button:{singapore:"Singapore",english:"English"},feature:{t01:"Exchange",t02:"Token",title:"Participate",h2:"Current burning ratio",noticket:"Change the token",send:"Send",rule:"Rule"},recommend:{t01:"My referee is",t02:"My direct push quantity",t03:"My invitation link",copylink:"Copy my invitation link",btn:"Immediately invited"},ruleModal:{title:"Rules of play",list01:"An account can only accept one investment before exiting, and can continue to invest after exiting",list02:"Static dividends fluctuate from 0.3% to 2.2% per day",list03:"Out of the game, according to 1-10 for the investment amount of 3 times, 11-30 for the investment amount of 4 times, greater than 31 for the investment amount of 5 times",list04:"Dynamic recommendation 25% according to: 10%->8%->7% to get dynamic rewards, instant cash withdrawal",list05:"After the prize pool reaches the specified time, the prize pool will not settle until the next round is opened.",list06:"Dynamically precipitates into a red pool if the conditions are not met"},GameModal:{title:"Token",ticketTitle:"Purchase admission Tokens",buy:"Buy"},joinbox:{t01:"Statistics",t02:"Ddata",tab01:"Earnings",tab02:"Performance",tab03:"Data",Onelist01:"User level ",Onelist02:"VIP",Onelist03:"Bonus income",Onelist04:"Current promotion income",Onelist05:"Jackpot earnings",Onelist06:"VIP bonus",Onelist07:"Residual income",Onelist08:"Current leverage surplus",clean:"Settle",withdraw:"withdraw",cash:"Withdraw income",recommend:"My invitation link",total:"View my statistics",Twolist01:"Number of Shared ids",Twolist02:"All",Twolist03:"Main",Threelist01:"Token burnout rate",Threelist02:"Burned token",global:"Global total performance",withdrawTip:"Tips: click the withdrawal button to withdraw all the withdrawal rewards."},testimonial:{t01:"Prize Draw",t02:"There's still time for the next draw",info:"The Grand Prize Pool will be awarded once every 24 hours. For each new investment, the time will be extended by 3 hours, and 100% of the prize pool will be awarded to the last 500 players with the largest investment. The small prize pool will be awarded once every 24 hours, 1/3 for the first prize, 1/3 for the second prize, and 1/3 for the third prize."},vip:{vip1:"silver card ",vip2:"gold card",vip3:"Diamond card"},msg:{copy:"Copy success",mag2:"The account balance is too large to withdraw",msg3:"Please use the official Ethereum main network!",msg4:"The recommendation code does not exist"}}},t0zf:function(t,e){},yAAI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.79b701d0d7420e2cea92.js.map