var wb=wb||{getAjaxUrl:function(){return"http://www.webbudds.com/core/ajax/"},checkResponse:function(e){if(e.error||e.error=="true"){console.log(e.msg);$("#overlay").fadeOut();alert("There is an error occured while posting your content")}else{document.location.reload()}},count:function(e){var t=0;if(e==null){return 0}else{$.each(e,function(e,n){t++});return t}},createNoteShareDialog:function(){var e='<div class="form-group"><label for="shareNoteContent" class="col-sm-2 control-label">Note</label><div class="col-sm-10"><textarea class="form-control" id="shareNoteContent" placeholder="Enter note here" required></textarea></div></div>'+this.creditsContainer();this.createShareDialogBox("Note",e,"wb.shareNote()")},createPhotoShareDialog:function(){var e='<div class="form-group"><label for="sharePhotoDescription" class="col-sm-2 control-label">Description</label><div class="col-sm-10"><textarea class="form-control" id="sharePhotoDescription" placeholder="Enter note here" required style="height:150px;"></textarea></div></div>'+"<br /><br />"+'<div class="form-group"><label for="sharePhotoFile" class="col-sm-2 control-label">File</label><div class="col-sm-10"><input type="file" id="sharePhotoFile"></div></div><br><br><div class="form-group"><label for="uploadProgress" class="col-sm-2 control-label"></label><div class="col-sm-10"><progress id="uploadProgress" class="form-control"></progress></div></div>'+this.creditsContainer();this.createShareDialogBox("Photo",e,"wb.sharePhoto()")},createYouTubeShareDialog:function(){var e='<div class="form-group"><label for="shareYouTubeContent" class="col-sm-2 control-label">Select</label><div class="col-sm-10"><select class="form-control" id="shareYouTubeContent"></select><small class="text-danger" id="youtubeAlert"></small></div></div>'+this.creditsContainer();this.createShareDialogBox("YouTube",e,"wb.shareYouTube()");$("#title-form-group").css("display","none");$("#shareTitle").val("webbudds");gapi.auth.init(function(){});var t;var n="412205397599-3sbdh56oipff01kh5f954t6sm4men8cd.apps.googleusercontent.com";var r=["https://www.googleapis.com/auth/youtube"];gapi.auth.authorize({client_id:n,scope:r,immediate:false},function(e){if(e&&!e.error){gapi.client.load("youtube","v3",function(){var e=gapi.client.youtube.channels.list({mine:true,part:"contentDetails"});e.execute(function(e){t=e.result.items[0].contentDetails.relatedPlaylists.uploads;var n={playlistId:t,part:"snippet",maxResults:50};var r=gapi.client.youtube.playlistItems.list(n);r.execute(function(e){var t=e.result.items;if(t){$("#youtubeAlert").html("");$.each(t,function(e,t){var n=t.snippet.title;var r=t.snippet.resourceId.videoId;$("#shareYouTubeContent").append('<option value="'+r+'">'+n+"</option>")})}else{$("#youtubeAlert").html("Sorry you have no uploaded videos")}})})})}else{$("#youtubeAlert").html("Error while connecting with YouTube. Please try again")}})},createSoundCloudShareDialog:function(){var e='<div class="form-group"><label for="shareSoundCloudContent" class="col-sm-2 control-label">Select</label><div class="col-sm-10"><select class="form-control" id="shareSoundCloudContent"></select><small class="text-danger" id="soundcloudAlert"></small></div></div>'+this.creditsContainer();this.createShareDialogBox("SoundCloud",e,"wb.shareSoundCloud()");$("#title-form-group").css("display","none");$("#shareTitle").val("webbudds");SC.connect(function(){SC.get("/me",function(e){SC.get("/users/"+e.id+"/tracks",function(e){for(var t=0;t<e.length;t++){$("#shareSoundCloudContent").append('<option value="'+e[t].id+'" data-desc="'+e[t].description+'">'+e[t].title+"</option>")}if(e.length==0){$("#soundcloudAlert").html("Sorry you have no uploaded tracks on SoundCloud")}})})})},createLinkShareDialog:function(){var e='<div class="form-group"><label for="shareLinkContent" class="col-sm-2 control-label">URL</label><div class="col-sm-10"><input type="text" class="form-control" id="shareLinkContent" placeholder="Paste URL here" required></div></div>'+this.creditsContainer();this.createShareDialogBox("Link",e,"wb.shareLink()");$("#title-form-group").css("display","none");$("#shareTitle").val("webbudds")},createFacebookShareDialog:function(){var e='<div class="form-group"><label for="shareFacebookContent" class="col-sm-2 control-label">URL</label><div class="col-sm-10"><input type="text" class="form-control" id="shareFacebookContent" placeholder="https://www.facebook.com/xxxxxxxxxx" required><br /><small>I acknowledge that, this page is belongs to me and I agrre to Terms and conditions.</small></div></div>'+this.creditsContainer();this.createShareDialogBox("Facebook Page",e,"wb.shareFacebook()");$("#title-form-group").css("display","none");$("#shareTitle").val("webbudds")},createGoogleShareDialog:function(){var e='<div class="form-group"><label for="shareGoogleContent" class="col-sm-2 control-label">URL</label><div class="col-sm-10"><input type="text" class="form-control" id="shareGoogleContent" placeholder="Paste Google page URL here" required></div></div>'+this.creditsContainer();this.createShareDialogBox("Google Page",e,"wb.shareGoogle()");$("#title-form-group").css("display","none");$("#shareTitle").val("webbudds")},createTwitterShareDialog:function(){var e='<div class="form-group"><label for="shareTwitterContent" class="col-sm-2 control-label">Screen name</label><div class="col-sm-10"><input type="text" class="form-control" id="shareTwitterContent" placeholder="Enter Twitter username here like: DhruvP1110" required></div></div>'+this.creditsContainer();this.createShareDialogBox("Twitter Page",e,"wb.shareTwitter()")},creditsContainer:function(){if($("#acc_credits").val()>=10){var e='<div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="checkbox"><label><input type="checkbox" id="isBoost"><span class="ripple"></span><span class="check"></span> Boost my share for 2 days by spending 10 points</label></div></div></div>';return e}else{return""}},createShareDialogBox:function(e,t,n){var r='<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="$(\'#shareModal\').fadeOut();">×</button><h4 class="modal-title">'+e+'</h4></div><div class="modal-body"><div class="form-group" id="title-form-group"><label for="shareTitle" class="col-sm-2 control-label">Title</label><div class="col-sm-10"><input type="text" class="form-control" id="shareTitle" placeholder="Enter title here" required></div></div><br><br>'+'<div class="form-group"><label for="shareCategoryContent" class="col-sm-2 control-label">Category</label><div class="col-sm-10"><select class="form-control" id="shareCategoryContent"></select></div></div><br /><br />';var i='</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal" onclick="$(\'#shareModal\').fadeOut();">Close</button><button type="button" class="btn btn-primary" onclick="'+n+';">Share</button></div></div></div></div>';$("#shareModal").html(r+t+i).fadeIn();$.post(this.getAjaxUrl()+"get_cat.php",{},function(e){var t;if(e.data){for(var n=0;n<wb.count(e.data);n++){t+='<option value="'+e.data[n].cat_id+'">'+e.data[n].title+"</option>"}}else{console.log("Categories not available")}$("#shareCategoryContent").html(t)},"json")},isShareBoost:function(){if($("#isBoost").length){if($("#isBoost").is(":checked")){return"yes"}else{return"no"}}else{return"no"}},showOverlay:function(){$(".overlay").fadeIn()},shareNote:function(){var e=$("#shareTitle").val();var t=this.isShareBoost();var n=$("#shareCategoryContent").val();var r=$("#shareNoteContent").val();r=r.replace(/(?:\r\n|\r|\n)/g,"<br />");if(wb.shareValidate()){this.showOverlay();$.post(this.getAjaxUrl()+"share_note.php",{title:e,note:r,boost:t,cat:n},function(e){wb.checkResponse(e)},"json")}},sharePhoto:function(){var e=$("#shareTitle").val();var t=this.isShareBoost();var n=$("#shareCategoryContent").val();var r=$("#sharePhotoDescription").val();r=r.replace(/(?:\r\n|\r|\n)/g,"<br />");if(wb.shareValidate()){this.showOverlay();var i=new FormData;var s=document.getElementById("sharePhotoFile");i.append("file",s.files[0]);i.append("title",e);i.append("boost",t);i.append("cat",n);i.append("photoDesc",r);$.ajax({url:this.getAjaxUrl()+"share_photo.php",type:"POST",xhr:function(){var e=$.ajaxSettings.xhr();if(e.upload){e.upload.addEventListener("progress",wb.progressHandling,false)}return e},beforeSend:function(){},success:function(){document.location.reload()},error:function(){$("#overlay").fadeOut();alert("There is an error occured while posting your content")},data:i,cache:false,contentType:false,processData:false})}},shareYouTube:function(){var e=$("#shareYouTubeContent option:selected").text();var t=this.isShareBoost();var n=$("#shareCategoryContent").val();var r=$("#shareYouTubeContent option:selected").val();if(wb.shareValidate()){this.showOverlay();$.post(this.getAjaxUrl()+"share_youtube.php",{title:e,video_id:r,boost:t,cat:n},function(e){wb.checkResponse(e)},"json")}},shareSoundCloud:function(){var e=$("#shareSoundCloudContent option:selected").text();var t=this.isShareBoost();var n=$("#shareCategoryContent").val();var r=$("#shareSoundCloudContent option:selected").val();var i=$("#shareSoundCloudContent option:selected").attr("data-desc");$.post(wb.getAjaxUrl()+"share_soundcloud.php",{title:e,track_id:r,description:i,boost:t,cat:n},function(e){wb.checkResponse(e)},"json")},shareLink:function(){var e=this.isShareBoost();var t=$("#shareCategoryContent").val();var n=$("#shareLinkContent").val();if(wb.shareValidate()){this.showOverlay();$.post(this.getAjaxUrl()+"share_link.php",{url:n,boost:e,cat:t},function(e){wb.checkResponse(e)},"json")}},shareFacebook:function(){var e=this.isShareBoost();var t=$("#shareCategoryContent").val();var n=$("#shareFacebookContent").val();if(wb.shareValidate()){this.showOverlay();var r=n.substring(n.lastIndexOf("/"));FB.getLoginStatus(function(i){FB.api("/v2.1"+r+"?access_token="+i.authResponse.accessToken,function(r){if(r&&!r.error){var i=r.id;var s=r.about||"";var o=r.category||"";var u=r.cover.source||"";var a=r.name;var f=r.website||"";var l=r.likes;var c=r.username||"";$.post(wb.getAjaxUrl()+"share_facebook.php",{url:n,boost:e,cat:t,fb_id:i,fb_about:s,fb_cat:o,fb_cover:u,fb_name:a,fb_website:f,fb_likes:l,fb_username:c},function(e){wb.checkResponse(e)},"json");console.log(r)}else{console.log(r);wb.checkResponse(r)}})})}},shareGoogle:function(){var e=this.isShareBoost();var t=$("#shareCategoryContent").val();var n=$("#shareGoogleContent").val();if(wb.shareValidate()){this.showOverlay();$.post(this.getAjaxUrl()+"share_google.php",{url:n,boost:e,cat:t},function(e){wb.checkResponse(e)},"json")}},shareTwitter:function(){var e=$("#shareTitle").val();var t=this.isShareBoost();var n=$("#shareCategoryContent").val();var r=$("#shareTwitterContent").val();if(wb.shareValidate()){this.showOverlay();$.post(this.getAjaxUrl()+"share_twitter.php",{title:e,twitter:r,boost:t,cat:n},function(e){wb.checkResponse(e)},"json")}},shareValidate:function(){var e=true;$("#shareModal input,#shareModal textarea").each(function(){if($(this).val()==""&&$(this).css("display")=="block"){e=false}});if(!e){alert("Please fill all necessary fields")}return e},progressHandling:function(e){if(e.lengthComputable){$("#uploadProgress").css("display","block").attr({value:e.loaded,max:e.total})}},soundCloudParser:function(e,t,n,r){SC.get("/resolve",{url:e},function(i){var s=i.id;if(wb.shareValidate()){wb.showOverlay();$.post(wb.getAjaxUrl()+"share_soundcloud.php",{title:n,track_id:s,track_url:e,boost:r,cat:t},function(e){wb.checkResponse(e)},"json")}})},youTubeParser:function(e){if(e.indexOf("?")!=-1){var t=decodeURI(e).split("?")[1];var n=t.split("&");for(var r=0,i=n.length;r<i;r++)if(n[r].indexOf("v=")===0)return n[r].replace("v=","")}else if(e.indexOf("youtu.be")!=-1){return decodeURI(e).split("youtu.be/")[1]}return null}};$(document).ready(function(){$(".share_card").each(function(e,t){var n=$(this).attr("data-id");if(n%10==0){$(this).css("background","rgb(229, 215, 242)")}else if(n%10==1){$(this).css("background","rgb(255, 255, 181)")}else if(n%10==2){$(this).css("background","rgb(236, 236, 255)")}else if(n%10==3){$(this).css("background","rgb(221, 255, 168)")}else if(n%10==4){$(this).css("background","rgb(255, 223, 223)")}else if(n%10==5){$(this).css("background","rgb(129, 255, 213)")}else if(n%10==6){$(this).css("background","rgb(223, 246, 255)")}else if(n%10==7){$(this).css("background","rgb(250, 231, 206)")}else if(n%10==8){$(this).css("background","rgb(92, 250, 255)")}else if(n%10==9){$(this).css("background","rgb(247, 207, 237)")}})})