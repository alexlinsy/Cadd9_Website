import React from 'react';
import featureTitle1 from '../assets/features/features-title-1.png';
import featureTitle2 from '../assets/features/features-title-2.png';
import featureTitle3 from '../assets/features/features-title-3.png';
import featureTitle4 from '../assets/features/features-title-4.png';
import featureImage1 from '../assets/features/features-image-1.png';
import featureImage2 from '../assets/features/features-image-2.png';
import featureImage3 from '../assets/features/features-image-3.png';
import featureImage4 from '../assets/features/features-image-4.png';
import featureImage5 from '../assets/features/features-image-5.png';
import featureImage6 from '../assets/features/features-image-6.png';
import featureImage7 from '../assets/features/features-image-7.png';
import featureImage8 from '../assets/features/features-image-8.png';
import featureImage9 from '../assets/features/features-image-9.png';
import featureImage10 from '../assets/features/features-image-10.png';
import featureImage11 from '../assets/features/features-image-11.png';

export const featuresData = {
  header1: '服务特色',
  header2: '课程种类',
  feature1: {
    title: featureTitle1,
    image: featureImage1,
    content:
      '我们会定期举办此类的创作营和每年的伯克利夏校，让学员和老师，学员和学员之间进行共同创作，激发灵感和相互学习。并且邀请业内知名的制作人和词曲作者来给大家分享他们的经验，并且我们会最终将优秀的作品投递给头部乎台如QQ，网易，和诸多国内顶尖的音乐制作公司和艺人团队。',
  },
  feature2: {
    title: featureTitle2,
    image: featureImage2,
    content:
      '我们团队中的每一位都是伯克利音乐学院和最顶尖的古典音乐学院毕业的老师。由从我们自己的考学亲身经历，加上我们带过的每一位学生的面试,考试,作品集准备的全程参与，让我们对这些院校的考核无比熟悉。所以考前我们会进行全英文的模拟面试，会有2-3名老师参与，完全还原考学的面试过程。使学员在当今考学大军中脱颖而出，并具备极强的竞争力，甚至在当今音乐产业中具备足够的职业技能和实力，这是我们的目标。',
  },
  feature3: {
    title: featureTitle3,
    image: featureImage3,
    content:
      '我们课程体系中的每一节课，都是由创始人及多位老师在多年教学经验中，结合国内外顶尖音乐学院的原版课程和理念，外加我们在中文语境中融会贯通后总结而成。此外，在课程中涉及到的英文专业术语，使学员能够在国际音乐交流语境中，充分理解并灵活运用海外音乐术语。针对0基础或者基础不够好，以及相对没有经验和方向的学生有效果显著的帮助，对有一定基础想要快速实践提高的同学更是如虎添翼。',
  },
  feature4: {
    title: featureTitle4,
    image: featureImage4,
    content:
      '我们会定期地邀请国外优秀的制作人，词曲人，表演者，韩国sm公司，YG公司制作人，格莱美奖获得者，伯克利音乐学院全额奖学金获得者，朱莉亚音乐学院奖学金获得者等等优秀的音乐人，定期地给我们的学员进行大师课传授，带给他们更丰富的音乐学习体验和更高的国际音乐产业视野。还会请到伯克利音乐学院和其他音乐学院的教授们亲自传授。',
  },
  coursesFeatures: [
    {
      title: (
        <>
          <div className="flex-column">
            <p className="font-heading feature-text-title feature-text mb-0">
              一对一
            </p>
            <p className="font-heading-english feature-text feature-text-insturment">
              Instrument
            </p>
            <p className="f-32 font-heading mb-0 feature-text-one">
              (声乐/钢琴/吉他/贝斯/等)
            </p>
          </div>
          <div className="flex-column">
            <p className="font-heading feature-text feature-text-title mb-0">
              乐器课
            </p>
            <p className="font-heading-english feature-text mb-0 feature-text-study">
              study
            </p>
          </div>
        </>
      ),
      image: featureImage5,
      notes: (
        <ul>
          <li className="f-16 font-heading leading-normal">
            根据不同学生适合的音乐风格分配适合的老师进行
            <span className="ml-20 feature-text-note-section-one feature-text-green">
              一对一甚至二对一辅导
            </span>
          </li>
          <li className="f-16 font-heading leading-normal">
            乐器种类多 选择范围广
          </li>
        </ul>
      ),
    },
    {
      title: (
        <div className="flex-column full-width">
          <p className="font-heading feature-text-title feature-text mb-0 full-width">
            制作 <span style={{position: 'absolute', left: '50%'}}>课</span>
          </p>
          <p className="font-heading-english feature-text flex flex-space-between">
            Production <span>class</span>
          </p>
        </div>
      ),
      image: featureImage6,
      notes: (
        <ul>
          <li className="f-16 font-heading leading-normal">
            logic pro/ableton
            live/Finale，Protools均可授课，以及各专业插件的使用
          </li>
          <li className="f-16 font-heading leading-normal">
            乐理课 Music Theory(和声/基础键盘技巧)
          </li>
          <li className="f-16 font-heading leading-normal">
            <span className="feature-text-green">我们独创总结的教材</span>
            ,爵士/流行和声,音乐人必备乐理知识，国际化教学标准
          </li>
        </ul>
      ),
    },
    {
      title: (
        <div className="flex-column full-width">
          <p className="font-heading feature-text mb-0 full-width flex flex-space-between">
            <span className="text-song-decon">音乐制作/分析课</span>
            <span className="font-heading-english text-song-decon">
              Song Decon-
            </span>
          </p>
          <p className="font-heading-english feature-text flex flex-space-between">
            <span className="text-song-decon">struction/</span>{' '}
            <span className="font-heading-english text-song-decon">
              Production analysis
            </span>
          </p>
        </div>
      ),
      image: featureImage7,
      notes: (
        <ul>
          <li className="f-16 font-heading leading-normal">
            解析大量歌曲结构/编排/意义/风格/艺术性
          </li>
          <li className="f-16 font-heading leading-normal">
            将国内外最炙手可热的歌曲进行拆分细化学习让制作与创作完美结合在一起
          </li>
        </ul>
      ),
    },
    {
      title: (
        <>
          <div className="flex flex-column">
            <p
              className="font-heading feature-text mb-0"
              style={{letterSpacing: '.5em'}}
            >
              <span className="text-song-decon">视唱练耳课</span>
            </p>
            <p className="font-heading-english feature-text mb-0 text-song-decon">
              Improvisation
            </p>
          </div>
          <div className="flex flex-column">
            <p
              className="font-heading-english feature-text mb-0 text-song-decon"
              style={{textAlign: 'end'}}
            >
              /即<span style={{marginLeft: '100px'}}>兴</span>
            </p>
            <p className="font-heading-english feature-text mb-0 text-song-decon">
              <span
                className="feature-text-sight-sing"
                style={{marginRight: '140px'}}
              >
                /
              </span>
              sight sing
            </p>
          </div>
        </>
      ),
      image: featureImage8,
      notes: (
        <ul>
          <li className="f-16 font-heading leading-normal">
            伯克利视唱练耳教学内容
          </li>
          <li className="f-16 font-heading leading-normal">
            训练耳朵对于音符/和声/节奏/旋律的敏锐程度各种风格即兴学习与开拓
          </li>
          <p
            className="f-16 font-heading-english leading-normal mb-0 feature-text-blues"
            style={{marginLeft: '20px'}}
          >
            (blues/jazz/-·funk/r&b/smooth jazz/pop/etc.)
          </p>
        </ul>
      ),
    },
    {
      title: (
        <div className="full-width">
          <p className="font-heading feature-text mb-0 full-width flex flex-space-between">
            <span>
              <span>职业</span>
              <span style={{marginLeft: '120px'}}>创作写歌</span>
            </span>{' '}
            <span className="font-heading-english">Creative</span>
          </p>
          <p className="font-heading-english feature-text flex flex-space-between feature-keyboard">
            <span>songwriting</span>{' '}
            <span style={{textAlign: 'end'}}>class</span>
          </p>
        </div>
      ),
      image: featureImage9,
      notes: (
        <ul>
          <li className="f-16 font-heading leading-normal">
            长期为产业内的艺人/明星作曲作词，并拿过不少奖项的Cadd9创始人，将与其他老师一起，把从
            <span style={{marginLeft: '60px'}}>
              0到1的词曲创作过程全部分享/传授给学员
            </span>
          </li>
          <li className="f-16 font-heading leading-normal">
            写出别人无法写出的歌，是在音乐产业中能够开启所有大门的一把钥匙
          </li>
          <li className="f-16 font-heading leading-normal">
            每个人的天赋将在歌曲创作中得到释放
          </li>
          <li className="f-16 font-heading leading-normal feature-text-green">
            创造拥有自己独一无二的声音和世界
          </li>
        </ul>
      ),
    },
    {
      title: (
        <div className="full-width">
          <p className="font-heading feature-text mb-0 full-width flex flex-space-between">
            <span>
              <span>音乐</span>
              <span style={{marginLeft: '120px'}}>类型</span>
            </span>{' '}
            <span className="font-heading-english">赏析课</span>
          </p>
          <p className="font-heading-english feature-text flex flex-space-between">
            <span>Groove</span> <span style={{textAlign: 'end'}}>Writing</span>
          </p>
        </div>
      ),
      image: featureImage10,
      notes: (
        <ul>
          <li className="f-16 font-heading leading-normal">
            鉴赏与刨析不同音乐类型，一对一带学生熟悉未
            <span className="feature-text-green">
              了解的音乐领域,开拓音乐思维
            </span>
          </li>
          <li className="f-16 font-heading leading-normal">
            混音练耳课{' '}
            <span className="font-heading-english">
              mixing & critical listening
            </span>
          </li>
          <li className="f-16 font-heading leading-normal">
            声学基本知识，锻炼耳朵对于声音的敏感度的手把手混音教学
          </li>
        </ul>
      ),
    },
    {
      title: (
        <div className="full-width">
          <p className="font-heading feature-text mb-0 full-width flex flex-space-between">
            <span>
              <span>音乐</span>
              <span className="business-text">商业管理</span>
            </span>{' '}
            <span className="font-heading-english">领导力</span>
          </p>
          <p className="font-heading-english feature-text flex flex-space-between">
            Music <span>business</span>
          </p>
        </div>
      ),
      image: featureImage11,
      notes: (
        <ul>
          <li className="f-16 font-heading leading-normal">版权，合约</li>
          <li className="f-16 font-heading leading-normal">厂牌，艺人经纪</li>
          <li className="f-16 font-heading leading-normal">
            创业孵化，creative idea
          </li>
        </ul>
      ),
    },
  ],
};
