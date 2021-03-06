import KakaoMap from "../../../commons/kakaomap";
import dynamic from "next/dynamic";
import * as S from "./BoardDetailStyles";
import { useEffect, useState } from "react";
import Livechat from "../../../commons/livechat/LivechatContainer";
import { IPropsBoardDetailUI } from "./BoardDetailTypes";
import VolunteerList from "../../../commons/volunteerList/volunteerListpresenter";

const ToastUIViewer = dynamic(
  () => import("../../../commons/texteditor/viewer"),
  { ssr: false }
);

export default function BoardDetailUI(props: IPropsBoardDetailUI) {
  const [windowSize, setWindowSize] = useState(false);
  const [whois, setWhois] = useState(1);

  useEffect(() => {
    if (props.data?.fetchBoard?.user.id !== props.userData?.fetchLoginUser.id)
      setWhois(1);
    if (props.data?.fetchBoard?.user.id === props.userData?.fetchLoginUser.id)
      setWhois(2);
    if (props.userData?.fetchLoginUser?.isAdmin) setWhois(3);
  }, [props.data, props.userData]);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <div>
      <S.Wrapper isChat={props.isChat}>
        {props.isChat && (
          <S.ChatWrapper>
            <Livechat userData={props.userData} />
          </S.ChatWrapper>
        )}

        <S.TitleWrapper>
          <S.TitleLabel>Title</S.TitleLabel>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        </S.TitleWrapper>
        <S.InnerWrapper>
          <S.InnerWrapperLeft>
            <S.InnerWrapperLeftUpper>
              <S.InfoWrapper>
                <S.InfoLeftWrapper>
                  <S.Map>
                    <KakaoMap data={props.data} />
                  </S.Map>
                </S.InfoLeftWrapper>
                <S.InfoRightWrapper>
                  <S.InfoDetailWrapper>
                    <S.LabelImage src="/images/boardWrite/center.png" />
                    <S.Label>?????????</S.Label>
                    <S.Detail>{props.data?.fetchBoard?.centerName}</S.Detail>
                  </S.InfoDetailWrapper>
                  <S.InfoDetailWrapper>
                    <S.LabelImage src="/images/boardWrite/phone.png" />
                    <S.Label>?????? ????????????</S.Label>
                    <S.Detail>{props.data?.fetchBoard?.centerPhone}</S.Detail>
                  </S.InfoDetailWrapper>
                  <S.InfoDetailWrapper>
                    <S.LabelImage src="/images/boardWrite/time.png" />
                    <S.Label>?????? ?????? ??????</S.Label>
                    <S.Detail>
                      ??? {props.data?.fetchBoard?.serviceTime}?????? ??????
                    </S.Detail>
                  </S.InfoDetailWrapper>
                  <S.InfoDetailWrapper>
                    <S.LabelImage src="/images/boardWrite/calendar.png" />
                    <S.Label>?????? ??????</S.Label>
                    <S.Detail>
                      {props.data?.fetchBoard?.serviceDate.slice(0, 10)}
                    </S.Detail>
                  </S.InfoDetailWrapper>
                  <S.LocationWrapper>
                    <S.LocationDisplay>
                      <S.InfoDetailWrapper>
                        <S.LabelImage src="/images/boardWrite/location.png" />
                        <S.Label>?????? ??????</S.Label>
                      </S.InfoDetailWrapper>
                    </S.LocationDisplay>
                    <S.Detail>
                      {props.data?.fetchBoard?.address} ,{" "}
                      {props.data?.fetchBoard?.addressDetail}
                    </S.Detail>
                  </S.LocationWrapper>
                  <S.InquiryWrapper>
                    <S.InfoDetailWrapper>
                      <S.QuestionIcon />
                      <S.Label>?????? ??????</S.Label>
                    </S.InfoDetailWrapper>
                    <S.Detail style={{ marginLeft: "30px" }}>
                      ??? ?????? ??????
                    </S.Detail>
                    <S.Detail style={{ marginLeft: "30px" }}>
                      ??? ?????? ?????????????????? ??????
                    </S.Detail>
                  </S.InquiryWrapper>
                  <S.Note>
                    ??? ??????????????? ??????, ??????????????? ?????? ??????, ?????? ??? ????????? ??????
                    ??? ??? ???! ????????? ???????????????.
                  </S.Note>
                  <S.Note>
                    ??? ???????????? ?????? ?????? ??????, ?????? ??? ???????????? ???????????????
                    ????????? ?????????, VolunTier??? ??????????????? ????????? ??? ??????
                    ???????????? ?????? ????????? ????????? ??????????????????.
                  </S.Note>
                </S.InfoRightWrapper>
              </S.InfoWrapper>
              <S.ContentsWrapper>
                <S.ContentsDetailWrapper>
                  <S.DetailDisplay>
                    <S.LabelImage src="/images/boardWrite/activity.png" />
                    <S.Label>?????? ??????</S.Label>
                  </S.DetailDisplay>
                  {props.data ? <ToastUIViewer data={props.data} /> : <></>}
                </S.ContentsDetailWrapper>
              </S.ContentsWrapper>
            </S.InnerWrapperLeftUpper>
            <S.ButtonWrapper>
              {whois === 1 && (
                <S.Button onClick={props.CreateEnroll}>????????????</S.Button>
              )}
              {whois === 2 && (
                <>
                  <S.Button onClick={props.onClickEdit}>????????????</S.Button>
                  <S.Button onClick={props.DeleteBoard}>????????????</S.Button>
                </>
              )}
              {whois === 3 && (
                <>
                  <S.Button onClick={props.onClickEdit}>????????????</S.Button>
                  <S.Button onClick={props.DeleteBoard}>????????????</S.Button>
                </>
              )}
            </S.ButtonWrapper>
          </S.InnerWrapperLeft>
          {!windowSize && (
            <S.InnerWrapperRight>
              <Livechat userData={props.userData} />
              <VolunteerList
                enrollData={props.enrollData}
                data={props.data}
                userData={props.userData}
              />
            </S.InnerWrapperRight>
          )}
          {windowSize && (
            <>
              <VolunteerList
                enrollData={props.enrollData}
                data={props.data}
                userData={props.userData}
              />
              <S.ChatIcon onClick={props.onClickChat}></S.ChatIcon>
            </>
          )}
        </S.InnerWrapper>
      </S.Wrapper>
    </div>
  );
}
