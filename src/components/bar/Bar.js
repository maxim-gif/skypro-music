import React from 'react';
import PropTypes from 'prop-types';
import {BarVolume} from '../BarVolume/BarVolume.js'
import {BarControl} from '../BarControl/BarControl.js'
import { useRef, useState, useEffect } from "react";
import * as S from './Bar.style.js'

const Bar = ({isLoading, trackId}) => {
  const isVisible = !!trackId.id;

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState(false);

  const audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const changeLoop = () => {
    audioRef.current.loop = !audioRef.current.loop;
    setLoop(!loop);
  };
  const togglePlay = isPlaying ? handleStop : handleStart;
  
  useEffect(() => {
    if (trackId) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
        handleStart();
      });
    }
    audioRef.current.src = trackId.track_file;
    audioRef.current.volume = currentVolume/100;
  }, [trackId])



  useEffect(() => {
      if (audioRef && audioRef.current) {
        const onTimeUpdate = () => setCurrentTime(audioRef.current.currentTime);
    
        audioRef.current.addEventListener('timeupdate', onTimeUpdate);
    
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener('timeupdate', onTimeUpdate);
          }
        };
      }
  }, []);

  const handleTimeChange = (event) => {
    const currentTime = parseFloat(event.target.value);
    setCurrentTime(currentTime);
    audioRef.current.currentTime = currentTime;
  };

  const handleVolumeChange = (event) => {
    const currentVolume = parseFloat(event.target.value);
    setCurrentVolume(currentVolume);
    audioRef.current.volume = currentVolume/100;
  };

  const time = (sec) => {
    const minutes = Math.floor(sec/60)
    const seconds = sec%60<10?`0${sec%60}`:sec%60
    return `${minutes}:${seconds}`
  }
  return(
    <>
      <audio controls ref={audioRef}>
        <source src="" type="audio/mpeg" />
      </audio>

      <S.Bar $isVisible={isVisible}>
        <S.BarPlayerHug>{time(Math.round(currentTime))}/{time(Math.round(duration))}</S.BarPlayerHug>
        <S.BarContent>
          <S.BarPlayerProgress
            min={0}
            max={duration}
            value={currentTime}
            step={0.01}
            onChange={handleTimeChange}
            $color="#B672FF"
          >
          </S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>

              <BarControl play={togglePlay} isPlaying={isPlaying} changeLoop={changeLoop} loop={loop}/>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor $isLoading={isLoading}>
                    <S.TrackPlayAuthorLink href="http://">{trackId.name}</S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum $isLoading={isLoading}>
                    <S.TrackPlayAlbumLink href="http://">{trackId.author}</S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLikeAndDis className="_btn-icon">
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLikeAndDis>
                  <S.TrackPlayLikeAndDis className="_btn-icon">
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use
                        xlinkHref="/img/icon/sprite.svg#icon-dislike"
                      ></use>
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayLikeAndDis>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <BarVolume handleVolumeChange={handleVolumeChange} currentVolume={currentVolume}/>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  ) 
}

Bar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  trackId: PropTypes.object.isRequired,
};
export {Bar};