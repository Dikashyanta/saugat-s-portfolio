;/*FB_PKG_DELIM*/

__d("InstamadilloPostReplySnippet",["fbt","MAWCurrentUser","WAJids"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a){var b=d("MAWCurrentUser").getID();return d("WAJids").isAuthorMe(a)||d("WAJids").extractUserId(a)===b}function a(a,b){return i(a)?h._(/*BTDS*/"__JHASH___mFseS1rAMg__JHASH__",[h._param("username",b)]).toString():h._(/*BTDS*/"__JHASH__Evzp9hBxtGA__JHASH__").toString()}g.isCurrentUserMe=i;g.getMessageReplySnippetForPost=a}),226);
__d("InstamadilloStoryReplySnippet",["fbt","IGDDataclassTypes.flow","InstamadilloPostReplySnippet"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a,b){if(b==null)return null;return d("InstamadilloPostReplySnippet").isCurrentUserMe(a)?h._(/*BTDS*/"__JHASH__nIuKmI_fRHl__JHASH__",[h._param("username",b)]):h._(/*BTDS*/"__JHASH__7Aj5lkWnpWM__JHASH__",[h._param("username",b)])}function j(a){return d("InstamadilloPostReplySnippet").isCurrentUserMe(a)?h._(/*BTDS*/"__JHASH__2o9LeU_LF8P__JHASH__"):h._(/*BTDS*/"__JHASH__H1PYwvDqdF___JHASH__")}function k(a,b){if(b==null)return null;return d("InstamadilloPostReplySnippet").isCurrentUserMe(a)?h._(/*BTDS*/"__JHASH__i9IwumGmhVA__JHASH__",[h._param("username",b)]):h._(/*BTDS*/"__JHASH__oODBqVVDzD3__JHASH__",[h._param("username",b)])}function l(a){return d("InstamadilloPostReplySnippet").isCurrentUserMe(a)?h._(/*BTDS*/"__JHASH__t8BAvSkp-WI__JHASH__"):h._(/*BTDS*/"__JHASH__qxjENi1bh3n__JHASH__")}function m(a,b){if(b==null)return null;return d("InstamadilloPostReplySnippet").isCurrentUserMe(a)?h._(/*BTDS*/"__JHASH__9F7PSluClv8__JHASH__",[h._param("username",b)]):h._(/*BTDS*/"__JHASH__BGeEHXsBPjH__JHASH__")}function a(a,b,c){var e;switch(b.action_type){case d("IGDDataclassTypes.flow").XmsgIgXmaActionType.React:e=j(a);break;case d("IGDDataclassTypes.flow").XmsgIgXmaActionType.Share:e=b.content_type===d("IGDDataclassTypes.flow").XmsgIgReceiverFetchContentType.StoryHighlight?i(a,b.username):k(a,b.username);break;case d("IGDDataclassTypes.flow").XmsgIgXmaActionType.Reply:e=l(a);break;case d("IGDDataclassTypes.flow").XmsgIgXmaActionType.Mention:e=m(a,c);break}return(b=e)==null?void 0:b.toString()}g.getMessageReplySnippetForStory=a}),226);
__d("PolarisHasEditHighlightEnabled",["PolarisIsLoggedIn","PolarisUA"],(function(a,b,c,d,e,f,g){"use strict";function a(){return d("PolarisUA").isDesktop()&&d("PolarisIsLoggedIn").isLoggedIn()}g.hasEditHighlightEnabled=a}),98);
__d("PolarisIGCoreAvatar.react",["cx","PolarisFastLink.react","PolarisIGCoreConstants","joinClasses","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function k(a){var b=a.children,d=a.className,e=a.href;a=a.onClick;switch(!0){case e!=null:return j.jsx(c("PolarisFastLink.react"),{className:d!=null?d:void 0,href:e,onClick:a,children:b});case a!=null:return j.jsx("button",{className:c("joinClasses")(d,"_aag4"),onClick:a,children:b});default:return j.jsx("span",{className:d,children:b})}}k.displayName=k.name+" [from "+f.id+"]";function a(a){var b=d("react-compiler-runtime").c(10),e=a.alt,f=a.dangerouslySetClassName,g=a.href,h=a.onClick,i=a.size;a=a.src;i=i===void 0?"medium":i;f=f!=null?f.__className:null;var l=c("PolarisIGCoreConstants").AVATAR_SIZES[i];i=c("PolarisIGCoreConstants").AVATAR_SIZES[i];var m;b[0]!==e||b[1]!==a||b[2]!==l||b[3]!==i?(m=j.jsx("img",{alt:e,className:"_aag5",height:l,src:a,width:i}),b[0]=e,b[1]=a,b[2]=l,b[3]=i,b[4]=m):m=b[4];b[5]!==f||b[6]!==g||b[7]!==h||b[8]!==m?(e=j.jsx(k,{className:f,href:g,onClick:h,children:m}),b[5]=f,b[6]=g,b[7]=h,b[8]=m,b[9]=e):e=b[9];return e}g["default"]=a}),98);
__d("PolarisPostActionLoadPostShareIds",["FBLogger","PolarisInstapi","emptyFunction"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.analyticsContext,d=a.entityID,e=a.entityType,f=a.qeUniverseName,g=f===void 0?"ig_external_sharing_v2":f,k=a.sharePlatform,l;switch(e){case"photo":case"sidecar":case"video":l=i;break;case"profile":l=j;break}return l==null?c("emptyFunction"):function(a){return l(d,{containermodule:b,exposed_to_experiment:"true",qe_universe_name:g,share_to_app:k}).then(function(b){b!=null&&a(h(d,e,k,b))})["catch"](function(a){return c("FBLogger")("ig_web").catching(a).mustfix("unexpected")})}}function h(a,b,c,d){return function(e){var f;switch(b){case"photo":case"sidecar":case"video":f={postId:a,sharePlatform:c,shareUrl:d,type:"POST_SHARE_URL_LOADED"};break;case"profile":f={sharePlatform:c,shareUrl:d,type:"PROFILE_SHARE_URL_LOADED",username:a};break}f!=null&&e(f)}}function i(a,b){return d("PolarisInstapi").apiGet("/api/v1/media/{media_id}/permalink/",{path:{media_id:a},query:b}).then(function(a){return a.data.permalink})}function j(a,b){return d("PolarisInstapi").apiGet("/api/v1/third_party_sharing/{profile_to_share_username}/get_profile_to_share_url/",{path:{profile_to_share_username:a},query:b}).then(function(a){return a.data.profile_to_share_url})}g.loadPostShareUrl=a}),98);
__d("PolarisPostShareUtils",["PolarisLinkBuilder","PolarisThirdPartyPlatformType","URI","nullthrows","polarisGetPostFromGraphMediaInterface"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){return(b==null?void 0:b.isPrivate)!==!0&&a.viewerCanReshare===!0}function b(a){return a.igMediaSharingDisabled!==!0}function i(a){var b=c("nullthrows")(a.code);return d("polarisGetPostFromGraphMediaInterface").isClipsPost(a)?d("PolarisLinkBuilder").buildClipsMediaLink(b):d("PolarisLinkBuilder").buildMediaLink(b)}function e(a){var b=window.location.origin+i(a);a=a.shareUrls;a=a!=null?a[d("PolarisThirdPartyPlatformType").PolarisThirdPartyPlatformType.COPY_LINK]:null;if(a!=null){a=new(h||(h=c("URI")))(a);return a.setQueryData(babelHelpers["extends"]({utm_source:"ig_web_copy_link"},a.getQueryData())).toStringRawQuery()}return b+"?utm_source=ig_web_copy_link"}g.getIsShareable=a;g.getIsMediaQuarantinedForShare=b;g.getShareURL=i;g.getCopyUrl=e}),98);
__d("XPolarisEditBoostedAdControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/b/edit_boosted_ad/",Object.freeze({context:"ads_manager_edit_promote_unknown"}),void 0);b=a;g["default"]=b}),98);
__d("XPolarisPostControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{permalink_key}/{shortcode}/",Object.freeze({chaining:!1,viewer:!1,show_insights:!1}),void 0);b=a;g["default"]=b}),98);
__d("getSendStoryToInstamadilloRecipient",["fbt","I64","IGDDataclassTypes.flow","InstamadilloStoryReplySnippet","LSAuthorityLevel","LSIntEnum","LSMessageReplySourceTypeV2","LSMessageSendStatus","MNXMAPreviewImageDecorationType","PolarisLinkBuilder","asyncToGeneratorRuntime","issueSendInstamadilloXMAReceiverFetch","renderInstamadilloOptimisticXmaReceiverFetch"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j;function a(a,e,f,g,k){var l;l=d("PolarisLinkBuilder").BASE_INSTAGRAM_URL+d("PolarisLinkBuilder").buildDirectUserStoryLink(e+"_"+((l=f)!=null?l:""));var m={__typename:"XMSGIgReceiverFetchXmaStoryFetchParams",reel_id:a,story_igid:e},n={__typename:"XMSGIgXmaContentRefDataclass",action_type:k,content_type:d("IGDDataclassTypes.flow").XmsgIgReceiverFetchContentType.Story,fetch_params:m,owner_fbid:f,target_url:l,username:g},o={authorityLevel:(i||(i=d("I64"))).of_int32(c("LSAuthorityLevel").OPTIMISTIC),replySnippet:(a=d("InstamadilloStoryReplySnippet").getMessageReplySnippetForStory("@me",n))!=null?a:void 0,replySourceTypeV2:(j||(j=d("LSIntEnum"))).ofNumber(c("LSMessageReplySourceTypeV2").IG_STORY_SHARE),sendStatus:i.of_int32(c("LSMessageSendStatus").SENDING_TO_SERVER),sendStatusV2:i.of_int32(1)},p={actionUrl:l,nativeUrl:l,targetId:i.of_string(e),type_:"xma_web_url"},q={authorityLevel:i.of_int32(c("LSAuthorityLevel").OPTIMISTIC),previewImageDecorationType:j.ofNumber(c("MNXMAPreviewImageDecorationType").INSTAGRAM_ICON),subtitleText:h._(/*BTDS*/"__JHASH__Wk0RMsUN8WM__JHASH__").toString(),titleText:g};return function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e,f,g,h){var i=k===d("IGDDataclassTypes.flow").XmsgIgXmaActionType.React||d("IGDDataclassTypes.flow").XmsgIgXmaActionType.Reply,j={contentRef:JSON.stringify(n),text:i?f:void 0};try{var l=(yield c("renderInstamadilloOptimisticXmaReceiverFetch")(a,j,m,q,p,o));yield c("issueSendInstamadilloXMAReceiverFetch")({comment:i?void 0:f,isDisappearingModeSettingOn:b,offlineThreadingId:l,openEb:e,receiverFetchXma:JSON.stringify(j),threadKey:a});g==null?void 0:g(a)}catch(b){h==null?void 0:h(b,a)}});return function(b,c,d,e,f,g){return a.apply(this,arguments)}}()}g["default"]=a}),226);