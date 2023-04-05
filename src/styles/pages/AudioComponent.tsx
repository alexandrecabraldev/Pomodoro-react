

export function AudioComponent(){
    return(
        <audio controls autoPlay={true}>
            <source src="../../../public/HolyNight.mp3" type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
    );
}