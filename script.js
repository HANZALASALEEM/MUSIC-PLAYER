var mySong = document.getElementById("mySong")
var icon = document.getElementById("icon")

icon.onclick = function () {
    if(mySong.paused){
        mySong.play()
        icon.src="MEDIA/pause.jpg"
    }
    else{
        mySong.pause()
        icon.src="MEDIA/play.png"
    }
}