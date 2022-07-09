import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* reel story */}
      <StoryReel />
      {/* message sender */}
      <MessageSender />
      {/* Posts/news feeds timeline */}
      <Post
        profilePic="https://pbs.twimg.com/profile_images/1525018523642257408/4FkiKiEC_400x400.jpg"
        message="Argiro Student center at Maharishi International University, Fairfield IA, USA 😀"
        timestamp="This is a timestamp"
        username="nirmal_silwal"
        image="https://pbs.twimg.com/media/EUpE30zWAAExZwV.jpg:large"
      />
      <Post
        image="https://1.bp.blogspot.com/-CEaYbNGE7FM/V0wxPsHG21I/AAAAAAAABKg/F33NUhaxlFw6wZIy7zhj_7o8ZzzT5LkmQCLcB/s1600/DSC06843.JPG"
        profilePic="https://www.wondersofnepal.com/wp-content/uploads/2021/09/manakamana-darshan25.jpg"
        message="Manakamana darshan dairies!! ❤️ In the hands of manakamana devi. God bless us! ❤️"
        timestamp=""
        username="kabu_koirala"
      />

      <Post
        image="http://cdn.cnn.com/cnnnext/dam/assets/220313204910-mount-everest-tea-party.jpg"
        profilePic="https://cdn.abcotvs.com/dip/images/11738427_041122-wls-hsu-proud-mt-everest-430p-vid.jpg?w=1600"
        message="fun time with buddies 😀 ❤️"
        timestamp=""
        username="samir_silwal"
      />
      <Post
        image="https://media.gq.com/photos/5dcaf2db81b355000904c757/1:1/w_2801,h_2801,c_limit/mount-everest-gq-men-of-the-year-2019-lede.jpg"
        profilePic="https://nenow.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-12-at-9.51.49-AM.jpeg"
        message="Woaa! this was the first time in history there was traffic jam in Everest. 🤣 😝"
        timestamp=""
        username="dipesh_sedhai"
      />

      <Post
        profilePic="https://assets.atlasobscura.com/article_images/lg/58451/image.jpg"
        message="I love Nepal. It's a beautiful country."
        image="https://www.arcgis.com/sharing/rest/content/items/d28359baa31340ba9f8933d03e79b246/resources/1599414192272.jpeg?w=3200"
        timestamp=""
        username="roshan_silwal"
      />

      <Post
        profilePic="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYEhIYEhUfEhgYDx8SEhAVJSEnJyUhJCQpLjwzKSw4LSQkNDo0ODM9Nzc3KDFVSkg1Sjw1N0oBDAwMEA8QGBISHjEeHB8/MT8/MT8xPzQxMT8xPz8xMTExPzE0MT0/P0A9MTc2MTg/NTU1PzQ2NEA3MTs/ODE0NP/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA9EAACAQMDAQQHBwIGAgMBAAABAgMABBEFEiExBhNBURciVGFxgZEUMkJSkpOhB7EVI2KCwfBy0TPh8ST/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJhEAAgICAgICAgIDAAAAAAAAAAECEQMSITEEUUFhEyIFcRSBkf/aAAwDAQACEQMRAD8A8ZooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooD1H0OXHtcX7bUnoduPa4/22r2TdRmr6orbPG/Q7ce1x/ttSeh249rj/bavZc0ZpqhyeNeh249rj/baj0O3Htcf7bV7KTSE01Qs8b9Dtx7XH+21HoeuPa4/0NXslFNURszxv0PXHtcf6Go9D1x7XH+hq9kopqhszxv0PXHtcf6Go9Dtx7XH+21eyUU1Q2Z456Hbj2uP9tqPQ7ce1x/ttXsdLmmqGx436Hbj2uP9tqT0O3Htcf7bV7LmjNNUTZ436Hbj2uP9tqT0O3Htcf7bV7KaM01Qs8a9Dtx7XH+21HoduPao/wBDV7ITRTVEbM8b9D1x7XH+hqPQ9ce1x/oavZcUU1Q2Z416Hrj2uP8AQ1HoeuPa4/0NXsuKSmqGzPG/Q9ce1x/ttRXsoopqhbG80ZoxRipAZroGuSKTdUgczRXANFCDujNJmkxUChc0tIBS1IYUUUuKECUUAUu2oJoMUYroCl20JOaSusUYoWEopcUmKFRDS0u2kNLAhFAFLRSwIKKWigG8Uu011RVbJo520ba7xRimxBxtpcUuKKWAoooFLLCgUu2lWuqkHG2jbXdFLByBXVFFAFFFFAFFFFAFFFFAFIaWuS1AJSUFqM04Ki0UmaKA4jfIBFdCm4E2qB5CnKr/AGWFzSiuaM0KnZNcGjNFCwUCikY4FSVHQaWm0fIzXW6hY6orndUeW9jQ4Z1U+RYA0sEqio6XcZ4DqT4gOOKr27S2Yk7v7TGJM4x3g6+WelSRZcUU2kgPTmgtUEnZNcZpCaKWVFzRmkooAzRRRQsFFFFQVCiiipLHCnp8K6zXK9B8KWnAOs0VyKXNVZFC0UUZpZIzcy7AD76ZvbgKvXqKr+0k+1Fx+YVWzaiJMY6Ac0bpEVZotNuQ648RT5mAyT4VkbTUmiJxg5qu7S9onjtpiBgsNow2CueM1KI6Jfa3tukEbRwOrzNwMNu7seZx415JNdySOXaRmc9SWJY/OoMkufr18a5Lsat0VfJLa+lHAcr8HI602hweufnxTSIx52k/Kn4LOaT7qE+H3ajZInVvhHoHYDtg8ckdrM+6FvVjYnJjc9Bn8v8AbNet180SWEkWC6kAHy4r3XsRq32mxhkLbpFGyQ+O4efvxj60bXZKTXDNFRXIauqiywUUUUAUUZpM0AtFc0VIOqKTNFAQY9RjL93uG8LnGfCpDToOrD615hp0wkvFAY5IwTmrnUtSjglWM7nz15qqaI+zXPqUY/Fn4U0dXj8AT8qqrm6iijEm3qOlQk7RQMp8DjpUXfwS+Pkv/wDGF8FJ+VNvrqr1UgfCshb9oVVyD90t/FTb/UoZFAQ5OavHlpFXLhtFpql5HMFAPNVVoqqSCc1V3cmzDDyqFYauFky49WplFJMzjNto00kCZyDVL2ntVNrMxGdq5HxzVysqSYMfOap+2F+gtJ4sbX2pj9Qrmi5WdblHXowOi6HJdbyuAqnnJxmtxo/ZaCPHeDe3jn7tVnYSOQIx2nYTw3ma2sSefFZ5ckras3wYo6ptDv8Ah8ATb3agdfuio/cxpnaoAx4CpwiXwP8ANNT2ox1rDZnSopFLd2scgYEAgg1G/p3ffZ5rqyY5XO+P4jg/UEfSp1xHt6VXdnLNl1Xf1R4HY/6egP8AOPrW+KTaaZyZ4pNM9CW75HXAqR9tHgDUfcvIAHvoVs5xirptGDafwO/b/wDSa4OoHwU1yfgKA48MZq2zFr0L9ufwWkN3J5UI48aj3F0isAWAzTZ+xa9Dj6nsIDjFB1uPyP6adjiRwCQD5VBv72GEkMoBAzUKbukWqNW0SP8AGVPRGP8AtoqNomqxzjIAGegoq28h+vo807Nb1vEJ681tNZ04TOrDAYEc1ltKkAvYyORk5r0WV1LYCgsR9KNu+CsUq5KO/jLRhCM7cZrPx6HvdsNhQPOtzcwKBzzxzVUiRlsR9GPrUUmuBKFq0Yu8s0jfG/d7qn6FpwlkADEnrjyq/vtEjVx/l5B5yRXNlH3Em6OPnz6ZqXkpERw2P3vZkuVAYgeNMXfZKMISM7scVdR6hJtZ5MADoKjLrgYYZcc4HNZvJK0a/gSXRQQWUlrJGyncPxDyqF2ksxN3m4EO6f5Z2+orDnnyrZpb9XyMt0B8KgX9o24q5wNvUdVzUSnJcloYot0UOlhrexj2qWYJkgDPJ5/5rN3vaa8YsIwy4H5MVt9FlVo9g52sy9fynH/FdX2gRy8kBfM1ippSbkjdwbilF0YfSu1l07rGy7mJ4wuCaka72huYiE2FCemRWosdHt4nxGgLA8sR0rvtBZxyD11DgdfNfeKbR2tLgnSSjV8nnMeu3W/1mY8/hHFbXRLuTvIJGXa7b0bjnaRnP1QVIsuzcEeHUBvLNSFRTNGnuYjH4cVZ5It8KjN4pKL2dlpdpJbwyMW3O2StU2mWt73by7+G5wSc1b37k8E5AHFNRXJ2bQcDyp+avgheMmk7H7KaVo9xIBA6HxqLM06bmVgSfCpMMW4Z3ACuDtBIBBo8zSuiV48W6sYtL2bDCQcnoR4VKk0qOTBaQlwMj1q43r5imZpV4OahZn6LvxoJdlymoLGqggn4DNVGsPHNyY2P+011b6iE8Qw8jTyasGJDKMHpgVMZJOzOWJvhdGZ06QQSb1RsA9MHiir3vgpJ2hgRxxRV94mf4JGLthskD5wwat7p2oL1cZOOtedB18j9autM1eNAEkBxnk9cCklLtDFKKtS6N8JlkRvVOSODimdG08Jl3654zUrSZonjBRsjAp6/UGNsHBC8UjfyJNcpdDGoy5X1CCffWYj1FHZxI2zb0A45qFf3U4RdjHfn1uazjxTM2SpyTyc0lyTFtKkrNbqOsxx2j87mLYSvNry6kkbIdsZ/NTut3DgiNiQF5x76gl8DjyrSMeLKSlzRMTWLqIELM+PHLZxWi7HaldzyMnMgGCcnLfzWOnfOBW07CX0NsC8kgVmOMEct8POkkq5RCbTtMn5a1u542yEdt65Xb97k/wA5q1l1UBPvYGOT5Cm/6iaY4jS8T1ggCyDyQng/In+ayFtc98jRHlCeufWxWGTHzZ0YsvFfI9reqmQItrI/Jy+DtUn3k1UfartZEMznaOu11f64NW8tvHCvqWokA8Nm41Gji73k2qxofHbyatFxS64LSTbu+TR2vaGOSPMeSAOT0INc9nZPtNy7Z9VI2yc/iJH/AKNZe7uo4leOMBeeRVj2C1FUa6Z2RECxl2ZiCMttGOPNh9ahY3q2jLJm6R6A9gvPP80xY6cu45OR5ZqWQOuc8ce+uLI+vnPyrmbZGz9na6cv/TTZsEB8OlSMDP3qbKjP3s1FkWxTax4PTqKaktI+hxTd/dCNSByT0qje9dyTV1bNYQcuy/8AscXPT603LaoPuEA1QC6fOOfrSC6c56/WppmqxJPhl/a25LEM64oqgF02cYOfjS1PJfT7Mdc3DZbyHSmre6c+rkAHrXfd73ZTkZbHSpSaMkZzndkeddtpHlU2WulX8lsBskyp+daCKW8lG/cqRn8x2k1nRpXdQmV24ABUZ+lCXZkt3kkXvNpwpJ6VOPCpLZvi6IllkuIq2lf/AA08Noysm7D5P4W3A0apYSRhpWUJGBknPSsRDqUkRWSF2Xz8hUq51G/1Q9yjsY1wXHCoPeTVs3jqPF2W8bypy5qjLaned9M8nhnC+8CuodOkcbjhAfPrV1ednEtGRnlWSTnKgcJUd5ua7PG8WMo7S6OTyvImpNR7+SE2lN1Dj6VpdMtFkjjiZQWDAq35SDVE09PQ6i0fKthv7VfyPFg43F00V8fycidSVpns1zbmW0khJB3wspyfEjFfP8hkgcjlSpII8q2una1fygLHIwjXq20BUHxxyfd1qDr0Jlnm7yExOrDcrYLNkD1uOOeTxXnSWvfJ2x/brsqYu1EwXaTkVHfX5Su3caaksOTgYHvpoWmPCqpR+EXbn8sWytpLqZY15Z26+Q8T8hXoHZzsRbyWd9I8vKOyxvuwECDLbgDggn+2ak/010FEWeacCMq6oSzbdibVY8+Gdw+lXd12Rsp0kTTLxYXZCJUjuTNHKP8AWNxPz/itYsyaKzs3bXklnE5aGOJVKozysryDcevGBzkD4V3DrCxZEoMcnrbQ6lN+PEE8EVk4rq8gk7hJzujkZI1jIfBLkHaTwMk/OvQ7fR7PTLdry+AmnPLvJ/nMXPREz1Pv+J4HTJwhJvg3yY5Y4pt9oxbdqZFckr6ufrWr0e/E6BwpAxVW+u2qbZoIWSE4+22ckfqhDx3qZ48hx7uK011bwRxRtbMqxSBTH62Ac9AM8+P/AHxzyYFXBnjbbrstodMidQWUE4o/we3zjYuKoElmjwC/Hhk0yyTKxkMrY8s+rWapcUb1JfJpBo1tz6i5rl9Et8cIKyM80gV3EzAY/N0rjRtTmmUhZGfB604IuXs2Q0S3/IKKzipc4bMjHPTnpS1PBP7ezBapo93HgqNwB5IFRI7eYglid2Ohr0txnrVNrNpuRjGPXA+tX3rszjicnSM4UubiFY9ucY931qPrbpaRmBJA7NjcoO4IajalrF0E7kL3ZJwdvHFQbSxaMhpY967gSD+KtIzpVf2WWFpt19Ezs7pcl1IoL4TPrH/gDzr1y27ORRxgFTHGq/dQ7Xf/AMj41E7D9nVgjE8gBkcZUAYWNT4AVpb85jNWk3q5MRik1FHkPbmRI7lY0j2IEGDjhvPnxrLtJmvTu2WnCe2fbjvFG5Cfd4V468jZ24Oa6PG8xfj1faOfyPClu5LplqQ5RpFUlFOCfAGn9J09pEM7cgNgDHWrLSnTu0RhtA5AK53sau9Hhy6wRgBWJLeQ8Sa5svlym6OnH4cYLb6LTQNLQW63EigANIyrg4ARCQT8xT/bhA0yhI85jyzjoBnAX3//AL76mXdzbq6Roz2s1uFedCDtmiHq8keqxboD15x8Ob6UyKWYDc3J93urPNKo0Rhjcr9GAms5M/dPu4q77O2EdvJJJcRNJIkKSRKBkYLbSSPocnwyauxpbyqxjXkbB8MkA49+Mn5VYdp9i2kjxwO1zIWQIqb5tqZU4xnCgZOfHI86jCm1bJzSS4Ri9e0e9vZSYCkmDmUoxSPvCOi/AYGep+GKch7Cau4UNJCgAABZ+U+BC5rQaLbac67orueF1wJAitGVf3hlOD7hV3FeQHvArzzmNMzNNvjijTBOSpChuh4C+Hh1rotnOujA6QLXTtU23k4dYo8qVRnRJzjA4yThSecdajdqu2C3l5E+wyWkL/5aFine88sfLOPp86lW2nWs11i8LMFXfIiIXmmnlO4JhRkhUAzjoc9Kh9ptGs43eW1Lxxoq94kkboUckBVXcM5I3HxxirKkyspSl2zfXPaKO/t8QWL3EpyArx7I4jjqX6Y+Bya8qeSeNmhk2xvGSrBjjafdW6v/AOpVvEqR2cBkVVAUv/lxoAOAB1P8V5xqt/JdTyTuAHdskKMKPAAVDjsuTbD5DwyuP+y/tNbmVQrOJAD6mGzz5fGrd9XuHjBxlSPDyqmg7G38ad48aRo68b7lIznqOp4NXukwyKO7mTH5XDiSNj4gMpI9+KwnDXlHTlyQzRUupevZGW+O3aU48aYsL1o5GMXGeoxV01ip3Cm7HTFTnxNZWcziRhrt1k54+VFWxtR5UVFjX7OlvPBvLrVZLO0jj1tiFsA/mNPSLu48PGmp5kjUu+Ai52jxJ91ZN26PTwY9I7fLKW4j/wD6XR8EgE7gchFHv99WGl2n2meJQAUV1LD3Cs5c6g0zERpsUn1jnLN8TW57AWx75j4Igz8a1hH9kMkv0Z6KihVAHQCo1y4wQehHNSXbjyHjWO7R9qY4j3ceJJT4fhT411yaS5OHDjnOajFW2Vnaa+7te5Q8sOT5LWKaEHnj5ip17dPI7SOcsT9KhM1edNpPg+58bxIY8SjJW/k6ZiQAf4rVdkLZwk9wkYkKKBGGfYGYHccHHXgDw61kowzOqL1YgD4k16BHfLGo0y1SRp96o5KbI0wdzuW8fL/vOvjxcnfo8f8AmcmHFi0ikm/ozmsamJHijypmmmEl2FcP3aJwkZPuwCR55q7BJZRnrWaudAliuGuVTNvI2Y3U7gM/hbyPgc1p7F0DxmVgi7huJYAfDJq2XmSSPBxLWLZpbpYrawPegneBtVTiR5W+4F/1Zxjyxmomh9nC6STXUsjXMkhLPHO8WzHGF2kDw+fFefdq+20k94skGDDAw7kOu5S4P38efl5Cplv/AFQmREX7NGxRAoYs2TgYrrjBqKRxymnJtm8sUkiu4S7Eu4lhmOMCbYN8bkfm25BPvpztFGrF48EmdYUYKMs6IXdwB71BHzFYUdrNRlkiuPs0eEd3QFiobcmznnPT+9RNU1rVJrhLlCsDpHtVUO5Mc5ODkZ5pasyefGuGzSdhVjhe4lvFNveTzttWVDHlOoCEgA8k8DyFVP8AVC8e6uobCCMvIg3MF9ZmdhkDHuHOffUSPt1coe51KBLmFh63qBWwPEeB/iks9Wjt7qO8tolAurd0hVjxFOH2jPPkFz8ald2WUoyjw+CmTsTeLNDDMFhaYP3eXV9zKucEA8Z6Z99azU+zVvLpMdzawiOeNA7beXZl4cE+4gn5Vt7DQokZZZM3FyB/8snrOD/pHRR7hUPR3SO7vrPcrKSkqp+TeMOD88H/AHUcmyyikP6bqEd9Zw3KoHZRv27dxDqCGXHmRuHzBqnv73S1mEgmgCzptcqy743GSrEDkDqDnx21W9g75bG5vdPuJFjVZC8RdwinzwT5jafrV5pltps0lxCsdtMwkL5Co5dXJbr5g5HwxShZTKykkowZT90g5BHhTka8VY3ujR24AjBWPJIXJOzPUD3Z/vUdEFc7hzwa7cHIHSkqVspKaDYzMF9HtwpLMBVHeWUtw+ZDsTwFFFcqPcaVItLHTI41zjJx41seyUaQ28kzfiYkgDnaOKKK2xds5vJX6oiX99eXpMdupjiP3nPl8ayOtafHbSCNG3uBmRt2ck+FFFTPmNnZ/FRX+Sl9FU7Uy7UUVxvs+nySaQ1bX/dyofJ1I9xBrfHtNqDMsMckaRuUEc7JllVs8jnBxtOQRxRRXdh46Pjf5Wbm1fsgHQdXszJJGVmjYO0oRu8S4zzyhwcnzHNV1/rcMkAtpYxHLKVLlsk2iq2eB13Hy8sedFFbOKs8uc2z0bROylnbxoBbo0mMszqHYseT16fKovb+3hWxkjWOMSuUWEbFVi24E4+QJooqbZjPiLo8kbSrzHJOB0He9P5queSeF8FmVv8AyyD/AO6KKhNvs87Fkc5OLSL2ULOtur/jliB+DHBqTouivO0mnd4sdxDP3kLP93ZjD4+OEPyooqkJP8mvxTOvxYL8b/tm9u+0EUOVutUQsFwyW0PrbvHJ9Yg/DFZu17XaVZyPLbWs0kzAhpHlOXz15LHr8KKK3SRq2zJ6pPdapdSTJCzu+MKiFwigYA/+6u9N/pzeuVLyJbseQrMe8/gY+hooqxBfW/Zy9t5FP2w3aocSRhnOxD1JycDHXHU4q7jFFFZS7LoeAoooqCx//9k="
        image="https://cdn.britannica.com/85/117385-050-9D7D5132/Copenhagen-Den.jpg"
        message="summer vibes at Copeghan"
        timestamp=""
        username="silwal_niraj"
      />

      <Post
        profilePic="https://api.time.com/wp-content/uploads/2019/09/american-flag-wind.jpg"
        message="Flag of the United States of America 💪"
        username="jon_doe"
        timestamp=""
        image="https://www.traveloffpath.com/wp-content/uploads/2020/06/Countries-That-Have-Reopened-For-American-Tourists.jpg"
      />
    </div>
  );
}

export default Feed;
