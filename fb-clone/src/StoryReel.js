import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://pbs.twimg.com/media/FJ0tARNXoAQshZg?format=jpg&name=large"
        profileSrc="https://avatars.githubusercontent.com/u/31946761?v=4"
        title="Nirmal Silwal"
      />

      <Story
        image="https://www.angelopedia.com/newspic/YTK80IT3HUKahti02.jpg"
        profileSrc="https://www.angelopedia.com/newspic/YTK80IT3HUKahti02.jpg"
        title="Shrinkhala Khatiwada"
      />

      {/* <Story
        image="https://i.pinimg.com/736x/1a/ae/b5/1aaeb5c10b53ef048eb907d0ed4a3c49.jpg"
        profileSrc="https://i.pinimg.com/736x/a7/94/2a/a7942a7fc2659b622265886b97ac5ea8.jpg"
        title="Barsha Siwakoti"
      /> */}

      {/* <Story
        image="https://image.tmdb.org/t/p/w500/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg"
        profileSrc="https://cdn.vox-cdn.com/thumbor/9eMMS0KrIzKbHN0kZM0Av1yVbOg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9490719/thor_big.jpg"
        title="Chris Hemsworth"
      /> */}

      <Story
        image="https://sportshub.cbsistatic.com/i/r/2022/01/02/8cf8f5a1-da48-4657-b146-c2d4b8c0c8eb/thumbnail/1200x675/ae5fe140386d70ef54e4bc6c0a5d6440/brock-lesnar-wwe-day-1.jpg"
        profileSrc="https://sportshub.cbsistatic.com/i/r/2022/02/22/9fda2a43-93fa-4b45-b5a5-790578bea5c3/thumbnail/1200x675/ff79de5678b394d51a72ad9592905e66/brock-lesnar-cowboy-wwe-raw.jpg"
        title="Brock Lesnar"
      />
      <Story
        image="https://i.pinimg.com/736x/f6/ed/8a/f6ed8a2d4c431d519b087212767e6625.jpg"
        profileSrc="https://www.itl.cat/pngfile/big/310-3102016_samantha-in-new-movie.jpg"
        title="Samantha Ruth"
      />

      <Story
        image="https://szcdn.ragalahari.com/mar2021/hd/kajal-aggarwal-mosagallu-pre-release/kajal-aggarwal-mosagallu-pre-release-1x.jpg"
        profileSrc="https://www.tollywood.net/wp-content/uploads/2020/06/Kajal-Aggarwal-rejects-Balakrishna-Good-Idea-or-Bad.jpg"
        title="Kajal Aggarwal"
      />

      {/* <Story
        image="https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=1024"
        profileSrc="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
        title="Google"
      />

      <Story
        image="https://patch.com/img/cdn20/shutterstock/23562256/20220214/015643/styles/patch_image/public/shutterstock-1721845465___14135411097.jpg"
        profileSrc="https://cdn.arstechnica.net/wp-content/uploads/2021/03/microsoft-800x534.jpg"
        title="Microsoft"
      /> */}
    </div>
  );
}

export default StoryReel;
