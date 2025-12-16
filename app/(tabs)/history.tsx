/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-expressions */
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { Dimensions, ScrollView, StatusBar, Text, View } from "react-native";
import tw from "twrnc";

export default function history() {
  const localSource1 = require("../../assets/video.mp4");

  const player1 = useVideoPlayer(localSource1, (player) => {
    (player.loop = true),
      (player.staysActiveInBackground = true),
      player.play,
      player.currentTime;
  });

  return (
    <View style={tw`bg-black flex-1`}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={tw`p-5 mt-5 bg-[#001529ff]`}>
        <Text style={tw`text-white font-bold text-2xl text-right`}>
          معلومات عن قيام الليل
        </Text>
      </View>
      <ScrollView>
        <VideoView
          player={player1}
          style={{
            width: Dimensions.get("window").width,
            height: 340,
          }}
          allowsFullscreen
          allowsPictureInPicture
          startsPictureInPictureAutomatically
        />
        <Text
          style={tw`text-white text-lg mt-6 mb-2 px-2 font-bold leading-10 text-right tracking-tight`}
        >
          كيفية قيام الليل:
        </Text>
        <Text
          style={tw`text-white text-lg px-2 font-bold leading-10 text-right mb-5 tracking-tight`}
        >
          قيام الليل مشروع وسنة، ومن أعمال الصالحين، ومن أعماله ﷺ، قال الله -جل
          وعلا-: يَا أَيُّهَا الْمُزَّمِّلُ ۝ قُمِ اللَّيْلَ إِلَّا قَلِيلًا
          [المزمل:1-2] يعني: النبي ﷺ. قال الله -جل وعلا-: وَمِنَ اللَّيْلِ
          فَتَهَجَّدْ بِهِ نَافِلَةً لَكَ [الإسراء:79] الآية، وقال عن عباد
          الرحمن في سورة الفرقان: وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا
          وَقِيَامًا [الفرقان:64] وقال في صفة عباد الله المسلمين المؤمنين:
          كَانُوا قَلِيلًا مِنَ اللَّيْلِ مَا يَهْجَعُونَ ۝ وَبِالأَسْحَارِ هُمْ
          يَسْتَغْفِرُونَ[الذاريات:17-18] فقيام الليل سنة مؤكدة، سواءً في أوله،
          أو في وسطه، أو في آخره، لكن آخره أفضل، الثلث الأخير أفضل، إلا إذا كان
          يشق عليه ذلك فإنه يوتر في أول الليل، يوتر بواحدة، بثلاث، بخمس، بسبع،
          بأكثر، يسلم من كل ثنتين، يصلي ثنتين ثنتين. ويجتهد في ترتيل القراءة،
          ويوتر بواحدة، وليس هناك شيء محدود، يقرأ ما تيسر من أول القرآن، من أوسط
          القرآن، من آخره، أو ينظم ختمه؛ يبدأ من أول القرآن إلى أن يختم، ثم
          يعود، كله طيب، ليس في هذا حد محدود، لكن السنة أن يرتل، كما قال الله
          -جل وعلا-: وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا [المزمل:4] كان النبي ﷺ يقرأ
          قراءة واضحة يرتلها حتى يستفيد من يسمعها. ويستحب له السؤال عند آية
          الرحمة، والتعوذ عند آية الوعيد، والتسبيح عند آية التسبيح في تهجده؛ كما
          كان النبي يفعل -عليه الصلاة والسلام-. والسنة أن يسلم من كل ثنتين؛
          لقوله ﷺ: صلاة الليل مثنى مثنى يعني: ثنتين ثنتين فإذا خشي أحدكم الصبح،
          صلى ركعة واحدة، توتر له ما قد صلى. يقرأ فيها الحمد وقُلْ هُوَ اللَّهُ
          أَحَدٌ [الإخلاص:1] إذا صار إلى الركعة الأخيرة، ويقنت فيها بعد الركوع
          بالقنوت الشرعي الذي علمه النبي ﷺ الحسن، وهو معروف عند أهل العلم.
          والسنة عدم العجلة، يطمئن في ركوعه، سجوده وقراءته، لا يعجل، يطمئن، كان
          النبي ﷺ يصلي بطمأنينة وترتيل للقراءة، خشوعًا في الركوع والسجود، هكذا
          المؤمن لا يعجل يطمئن في ركوعه وسجوده، يطمئن في قراءته، ولا يعجل، يخشع
          فيها، تأسيًا بالنبي -عليه الصلاة والسلام-، وإذا أوتر بواحدة أو بثلاث
          أو بخمس أو بأكثر فلا بأس، الأمر واسع، صلاة الليل ما فيها حد محدود، لكن
          أفضلها إحدى عشرة، أو ثلاث عشرة تأسيًا بالنبي ﷺ، يسلم من كل ثنتين،
          ويوتر بواحدة، هذا هو أفضلها، وإن أوتر بأكثر من هذا فلا بأس.
        </Text>
      </ScrollView>
    </View>
  );
}
