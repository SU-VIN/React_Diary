import React from "react";
const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick, //useState의 상태변화함수가 아니거나 useCallback으로 묶어둔 콜백이아니라면
  //기본적으로 컴포넌트 렌더링 될때 다시 생성된다
  isSelected,
}) => {
  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={() => onClick(emotion_id)}
    >
      <img src={emotion_img}></img>
      <span>{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
