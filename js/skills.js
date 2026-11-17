/* One subject per universe. A lesson is a lecture: the concept, one case that uses it, then questions that need the concept. */
window.AIMING_SKILLS = {
  "yingxiao": {
    "title": {
      "zh": "用细分、定位和漏斗做一次可衡量的推广",
      "zhHant": "用細分、定位和漏斗做一次可衡量的推廣",
      "en": "Run one measurable campaign with STP and a funnel"
    },
    "minutes": 50,
    "lessons": [
      {
        "title": {
          "zh": "细分、选择目标、定位",
          "zhHant": "細分、選擇目標、定位",
          "en": "Segment, target, then position"
        },
        "concept": {
          "zh": [
            "营销先决定卖给谁，再决定说什么。细分不是把人按年龄切开就结束。一个能用的细分，是一群人有同一件要完成的事、同一个限制。人口、购买行为和所处情境都可以用来切；切完如果组里的人需要的好处并不一样，就不能拿这组人去写同一句话。",
            "选择目标要过四道检查：这一组够不够大，值得单独做一套做法；它和旁边那组是不是真的不同；你现有的渠道能不能碰到他们；多做这一套之后，利润还盖不盖得住成本。有一道不过，它就还是一份名单，不是目标。",
            "定位是你在购买者已经在用的替代方案旁边占的位置。一句话里要有三样：给谁、替代的是什么、差别只有哪一个。「最好」和「适合所有人」没有替代方案，也没有差别，所以不是定位。"
          ],
          "zhHant": [
            "營銷先決定賣給誰，再決定說什麼。細分不是把人按年齡切開就結束。一個能用的細分，是一群人有同一件要完成的事、同一個限制。人口、購買行為和所處情境都可以用來切；切完如果組裡的人需要的好處並不一樣，就不能拿這組人去寫同一句話。",
            "選擇目標要過四道檢查：這一組夠不夠大，值得單獨做一套做法；它和旁邊那組是不是真的不同；你現有的渠道能不能碰到他們；多做這一套之後，利潤還蓋不蓋得住成本。有一道不過，它就還是一份名單，不是目標。",
            "定位是你在購買者已經在用的替代方案旁邊佔的位置。一句話裡要有三樣：給誰、替代的是什麼、差別只有哪一個。「最好」和「適合所有人」沒有替代方案，也沒有差別，所以不是定位。"
          ],
          "en": [
            "Marketing decides who you serve before it decides what you say. A usable segment is a group that shares one job and one constraint. Age, buying behavior, or situation can be the cut. If the people inside still need different benefits, they are not one segment, and they cannot share one message.",
            "A target has to pass four tests: it is large enough to deserve its own plan; it is genuinely different from the next group; a channel you already have can reach it; and the margin still covers the extra plan. Fail one test and the group is still a list, not a target.",
            "A position is the place you occupy next to the alternative the buyer already uses. The sentence names who it is for, what it replaces, and the one difference. “Best” and “for everyone” name no alternative and no difference, so they are not a position."
          ]
        },
        "case": {
          "zh": [
            "岸线是香港一家两人公司，卖一套报销审批。创办人说目标是「全香港的中小企」。桌上有三组。甲：八人以下的餐厅，现金进出，很少有人专门追收据。乙：十到五十人的贸易公司，星期五由一名财务文员在群聊里追收据。丙：已经用着大型系统的上市公司。",
            "甲要完成的事不是审批，单独为他们做一套说法，利润也盖不住。丙的系统已经在，两人团队也进不去那种采购。乙过得了大小、差异、接触和利润。替代方案不是另一家软件，而是星期五那条群聊，外加一份没有人看的表格。"
          ],
          "zhHant": [
            "岸線是香港一家兩人公司，賣一套報銷審批。創辦人說目標是「全香港的中小企」。桌上有三組。甲：八人以下的餐廳，現金進出，很少有人專門追收據。乙：十到五十人的貿易公司，星期五由一名財務文員在群聊裡追收據。丙：已經用著大型系統的上市公司。",
            "甲要完成的事不是審批，單獨為他們做一套說法，利潤也蓋不住。丙的系統已經在，兩人團隊也進不去那種採購。乙過得了大小、差異、接觸和利潤。替代方案不是另一家軟件，而是星期五那條群聊，外加一份沒有人看的表格。"
          ],
          "en": [
            "Anxian is a two-person Hong Kong company selling expense approval. The founder says the target is “every SME in Hong Kong.” Three groups are on the table. A: restaurants with fewer than eight staff, mostly cash, almost nobody chasing receipts. B: trading firms of ten to fifty people, where a finance clerk chases receipts in a chat group every Friday. C: listed companies that already run a large system.",
            "A is not doing approvals, and a plan just for them would not pay for itself. C already has a system, and a two-person team cannot get into that kind of purchase. B passes size, difference, access, and margin. The alternative is not another product. It is Friday’s chat thread, plus a spreadsheet nobody opens."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 80,
            "prompt": {
              "zh": "岸线该选哪一组做目标？另外两组各没过哪一道检查？写出检查的名字：大小、差异、接触或利润。",
              "zhHant": "岸線該選哪一組做目標？另外兩組各沒過哪一道檢查？寫出檢查的名字：大小、差異、接觸或利潤。",
              "en": "Which group should Anxian target? Which test does each of the other two fail? Name the test: size, difference, access, or margin."
            }
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "哪一句才是定位？",
              "zhHant": "哪一句才是定位？",
              "en": "Which sentence is a position?"
            },
            "options": [
              {
                "zh": "岸线是最好的报销工具，适合所有人。",
                "zhHant": "岸線是最好的報銷工具，適合所有人。",
                "en": "Anxian is the best expense tool, for everyone."
              },
              {
                "zh": "给仍在群聊里追收据的十到五十人贸易公司：岸线用按在用人头计费的审批，换掉星期五的群聊，而不是换掉一份没人看的表格。",
                "zhHant": "給仍在群聊裡追收據的十到五十人貿易公司：岸線用按在用人頭計費的審批，換掉星期五的群聊，而不是換掉一份沒人看的表格。",
                "en": "For a trading firm of ten to fifty still chasing receipts in chat: Anxian replaces Friday’s thread with approval priced per active person, instead of replacing a spreadsheet nobody opens."
              },
              {
                "zh": "面向未来的数字化转型。",
                "zhHant": "面向未來的數字化轉型。",
                "en": "Digital transformation for the future."
              }
            ]
          },
          {
            "kind": "write",
            "min": 70,
            "prompt": {
              "zh": "创办人说餐厅的店铺数量更多。用四道检查里的一道说明，为什么数量更大还不等于目标。",
              "zhHant": "創辦人說餐廳的店鋪數量更多。用四道檢查裡的一道說明，為什麼數量更大還不等於目標。",
              "en": "The founder says there are more restaurants. Use one of the four tests to explain why a larger count is not yet a target."
            }
          }
        ]
      },
      {
        "title": {
          "zh": "营销组合要和定位是同一件事",
          "zhHant": "營銷組合要和定位是同一件事",
          "en": "The marketing mix has to agree with the position"
        },
        "concept": {
          "zh": [
            "产品、价格、渠道、推广是四个决定，不是四句形容词。产品是它替目标完成的那件工作。价格会告诉人你站在哪一档。渠道是目标真的能在哪里拿到它。推广是一件能核对的证明，加上一个动作，不是把优点堆完。",
            "四个决定必须指向同一定位。定位说的是换掉星期五的追收据，价格却做成一次性买断，渠道却放在目标从不去的地方，组合就在反对定位。购买者会相信组合，不相信口号。",
            "降价修不好一个目标到不了的渠道。先让渠道和证明对准那个人，再谈价格是不是那一档。价格自己不能把人带到他不去的地方。"
          ],
          "zhHant": [
            "產品、價格、渠道、推廣是四個決定，不是四句形容詞。產品是它替目標完成的那件工作。價格會告訴人你站在哪一檔。渠道是目標真的能在哪裡拿到它。推廣是一件能核對的證明，加上一個動作，不是把優點堆完。",
            "四個決定必須指向同一定位。定位說的是換掉星期五的追收據，價格卻做成一次性買斷，渠道卻放在目標從不去的地方，組合就在反對定位。購買者會相信組合，不相信口號。",
            "降價修不好一個目標到不了的渠道。先讓渠道和證明對準那個人，再談價格是不是那一檔。價格自己不能把人帶到他不去的地方。"
          ],
          "en": [
            "Product, price, place, and promotion are four decisions, not four adjectives. Product is the job it does for the target. Price tells them which tier you occupy. Place is where that person can actually get it. Promotion is one checkable proof plus one action, not a pile of virtues.",
            "The four decisions have to point at the same position. If the position is “replace Friday’s receipt chase” but the price is a one-time toy and the place is somewhere the target never goes, the mix is arguing with the position. Buyers believe the mix, not the slogan.",
            "A lower price does not repair a place the target never visits. Match the place and the proof to that person first. Then ask whether the price is the right tier. Price alone cannot carry the offer to a room they do not enter."
          ]
        },
        "case": {
          "zh": [
            "岸线现在的页面写着「智能、高效、一站式」。售价是港币九十九元，一次买断。二维码贴在共享办公的大堂。财务文员星期五在自己的座位上追收据，不去那栋大堂。",
            "一次买断的价格，在财务经理眼里像一个不会被认真用的小工具。定位要的是另一套决定：按实际在用的人数计费，文员在座位上就能打开页面，证明是星期五的收据从群聊变成一份审批清单，动作是预约一次二十分钟的演示。"
          ],
          "zhHant": [
            "岸線現在的頁面寫著「智能、高效、一站式」。售價是港幣九十九元，一次買斷。二維碼貼在共享辦公的大堂。財務文員星期五在自己的座位上追收據，不去那棟大堂。",
            "一次買斷的價格，在財務經理眼裡像一個不會被認真用的小工具。定位要的是另一套決定：按實際在用的人數計費，文員在座位上就能打開頁面，證明是星期五的收據從群聊變成一份審批清單，動作是預約一次二十分鐘的演示。"
          ],
          "en": [
            "Anxian’s page currently says “smart, efficient, one-stop.” The price is HK$99, paid once. The QR code is in a co-working lobby. On Friday the finance clerk chases receipts from their own desk. They do not go to that lobby.",
            "A one-time price looks, to a finance manager, like a toy that will not be used seriously. The position wants a different set of decisions: price by the people actually using it, a page the clerk can open at the desk, proof that Friday’s receipts move from a chat thread to one approval list, and one action, which is booking a twenty-minute demo."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 110,
            "prompt": {
              "zh": "按这一定位重写四个决定：产品、价格、渠道、推广。每一个都要和「换掉星期五的群聊」是同一件事。",
              "zhHant": "按這一定位重寫四個決定：產品、價格、渠道、推廣。每一個都要和「換掉星期五的群聊」是同一件事。",
              "en": "Rewrite the four decisions for this position: product, price, place, and promotion. Each one has to be the same job as replacing Friday’s chat thread."
            }
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "哪一套组合在拆这一定位？",
              "zhHant": "哪一套組合在拆這一定位？",
              "en": "Which mix breaks this position?"
            },
            "options": [
              {
                "zh": "港币九十九元一次买断，二维码在共享办公大堂，口号是适合所有人。",
                "zhHant": "港幣九十九元一次買斷，二維碼在共享辦公大堂，口號是適合所有人。",
                "en": "HK$99 paid once, a QR code in a co-working lobby, and a slogan that says it is for everyone."
              },
              {
                "zh": "按在用的人数按月计费，文员在座位上打开页面预约二十分钟演示，证明是收据从群聊变成一份审批清单。",
                "zhHant": "按在用的人數按月計費，文員在座位上打開頁面預約二十分鐘演示，證明是收據從群聊變成一份審批清單。",
                "en": "A monthly price per person in use, a page the clerk opens at the desk to book a twenty-minute demo, and proof that receipts move from chat to one approval list."
              },
              {
                "zh": "直接找那个追收据的文员谈，价格跟着实际在用的人数走。",
                "zhHant": "直接找那個追收據的文員談，價格跟著實際在用的人數走。",
                "en": "Talk to the clerk who chases the receipts, and let the price follow the number of people actually using it."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "为什么先降价不能修岸线现在的组合？",
              "zhHant": "為什麼先降價不能修岸線現在的組合？",
              "en": "Why does cutting the price first not repair Anxian’s current mix?"
            },
            "options": [
              {
                "zh": "因为九十九元已经太贵，再降才有人要。",
                "zhHant": "因為九十九元已經太貴，再降才有人要。",
                "en": "Because HK$99 is already too expensive, and only a lower price will be wanted."
              },
              {
                "zh": "因为目标从不经过那个大堂，更低的价格仍然递不到那个人手里。",
                "zhHant": "因為目標從不經過那個大堂，更低的價格仍然遞不到那個人手裡。",
                "en": "Because the target never passes through that lobby, so a lower price still never reaches them."
              },
              {
                "zh": "因为推广不该提到价格。",
                "zhHant": "因為推廣不該提到價格。",
                "en": "Because promotion should never mention price."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "漏斗里只先修最紧的那一层",
          "zhHant": "漏斗裡只先修最緊的那一層",
          "en": "Repair the tightest stage of the funnel first"
        },
        "concept": {
          "zh": [
            "一条推广至少分三层：知道、考虑、转化。知道层看触及或曝光。考虑层看点击，以及点进来的是不是目标里的人。转化层看你真正要的那个动作。岸线要的动作是预约演示，不是再看一眼页面。",
            "每一层只盯一个数。数会告诉你紧的是哪一层。在紧的那一层上面加预算，是在放大一个还没接住的步骤。曝光可以很大，演示仍然很少。",
            "约束在转化时，要改的是三件事里真正松的那件：信息有没有对准这一组人，证明是否能被核对，请求的动作是否过重。不是先去买更多曝光。"
          ],
          "zhHant": [
            "一條推廣至少分三層：知道、考慮、轉化。知道層看觸及或曝光。考慮層看點擊，以及點進來的是不是目標裡的人。轉化層看你真正要的那個動作。岸線要的動作是預約演示，不是再看一眼頁面。",
            "每一層只盯一個數。數會告訴你緊的是哪一層。在緊的那一層上面加預算，是在放大一個還沒接住的步驟。曝光可以很大，演示仍然很少。",
            "約束在轉化時，要改的是三件事裡真正松的那件：信息有沒有對準這一組人，證明是否能被核對，請求的動作是否過重。不是先去買更多曝光。"
          ],
          "en": [
            "A campaign has at least three stages: awareness, consideration, and conversion. Awareness is reach or impressions. Consideration is the click, and whether the person who clicked is in the target. Conversion is the action you actually want. For Anxian that action is a booked demo, not another look at the page.",
            "Watch one number per stage. The numbers tell you which stage is tight. Spending more above a tight stage multiplies a step that is not holding. Impressions can be large while demos stay scarce.",
            "When conversion is the constraint, change whichever of these is actually loose: whether the message matches this group, whether the proof can be checked, and whether the action you ask for is too heavy. Do not start by buying more impressions."
          ]
        },
        "case": {
          "zh": [
            "岸线这个月的数是：曝光四万，点击一千六百，点击率百分之四；演示预约十二次，大约是点击的百分之零点七五。负责人说再买曝光。",
            "百分之四的点击说明考虑层并不差。四万曝光也已经够看。十二次演示才是紧的地方。再买曝光，是把同一个很弱的转化再乘一遍。"
          ],
          "zhHant": [
            "岸線這個月的數是：曝光四萬，點擊一千六百，點擊率百分之四；演示預約十二次，大約是點擊的百分之零點七五。負責人說再買曝光。",
            "百分之四的點擊說明考慮層並不差。四萬曝光也已經夠看。十二次演示才是緊的地方。再買曝光，是把同一個很弱的轉化再乘一遍。"
          ],
          "en": [
            "Anxian’s numbers this month: 40,000 impressions, 1,600 clicks, a four percent click rate, and 12 booked demos, about 0.75 percent of the clicks. The lead says to buy more impressions.",
            "A four percent click rate says consideration is not the weak stage. Forty thousand impressions are already enough to see the pattern. Twelve demos are the tight stage. Buying impressions multiplies the same weak conversion."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "以这组数来看，约束在哪一层？",
              "zhHant": "以這組數來看，約束在哪一層？",
              "en": "Given these numbers, where is the constraint?"
            },
            "options": [
              {
                "zh": "知道层，因为四万曝光还不够大。",
                "zhHant": "知道層，因為四萬曝光還不夠大。",
                "en": "Awareness, because 40,000 impressions are still not large enough."
              },
              {
                "zh": "考虑层，因为百分之四的点击率才是问题。",
                "zhHant": "考慮層，因為百分之四的點擊率才是問題。",
                "en": "Consideration, because a four percent click rate is the problem."
              },
              {
                "zh": "转化层，从点击到预约演示。",
                "zhHant": "轉化層，從點擊到預約演示。",
                "en": "Conversion, from the click to a booked demo."
              }
            ]
          },
          {
            "kind": "write",
            "min": 100,
            "prompt": {
              "zh": "用四万、一千六百和十二这三个数，说明你要改组合里的哪一项，以及你不买更多的是什么。",
              "zhHant": "用四萬、一千六百和十二這三個數，說明你要改組合裡的哪一項，以及你不買更多的是什麼。",
              "en": "Using 40,000, 1,600, and 12, say which mix decision you would change, and what you would not buy more of."
            }
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "下周只汇报一个数。该是哪一个？",
              "zhHant": "下週只彙報一個數。該是哪一個？",
              "en": "You may report one number next week. Which one?"
            },
            "options": [
              {
                "zh": "预约演示的次数，因为这是现在紧的那一层。",
                "zhHant": "預約演示的次數，因為這是現在緊的那一層。",
                "en": "Booked demos, because that is the stage that is tight now."
              },
              {
                "zh": "曝光，因为曝光这个数最大。",
                "zhHant": "曝光，因為曝光這個數最大。",
                "en": "Impressions, because that number is the largest."
              },
              {
                "zh": "点击率，因为百分之四最好看。",
                "zhHant": "點擊率，因為百分之四最好看。",
                "en": "Click rate, because four percent looks the best."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "简报要能在某一天对上",
          "zhHant": "簡報要能在某一天對上",
          "en": "A brief has to be checkable on a date"
        },
        "concept": {
          "zh": [
            "初级要交的简报不是气氛。它有六样：目标，是一个数加一个日期；受众，是那一个细分，不是所有人；一句信息，就是定位；一件证明，是别人能核对的事；一个动作；以及用来结束争论的那个指标。",
            "「提升知名度」和「有创意一点」不能在某一天被对上。能对上的目标长这样：在某个日期前，从某一群人那里拿到多少次你要的动作。指标必须是漏斗里现在紧的那一层，否则简报在奖励一个不紧的数。",
            "简报里只留一个信息。第二个信息会让人不知道动作是哪一个，指标也不再只量这一层。创意是在这一句里面做，不是另起一件事。"
          ],
          "zhHant": [
            "初級要交的簡報不是氣氛。它有六樣：目標，是一個數加一個日期；受衆，是那一個細分，不是所有人；一句信息，就是定位；一件證明，是別人能核對的事；一個動作；以及用來結束爭論的那個指標。",
            "「提升知名度」和「有創意一點」不能在某一天被對上。能對上的目標長這樣：在某個日期前，從某一群人那裡拿到多少次你要的動作。指標必須是漏斗裡現在緊的那一層，否則簡報在獎勵一個不緊的數。",
            "簡報裡只留一個信息。第二個信息會讓人不知道動作是哪一個，指標也不再只量這一層。創意是在這一句裡面做，不是另起一件事。"
          ],
          "en": [
            "A junior’s brief is not a mood. It has six parts: an objective, which is a number and a date; an audience, which is that one segment, not everyone; one message, which is the position; one proof someone else can check; one action; and the metric that ends the argument.",
            "“Raise awareness” and “be creative” cannot be checked on a date. An objective that can be checked looks like this: by a date, this many of the action you want, from this group. The metric has to be the funnel stage that is tight now. Otherwise the brief rewards a number that is not the constraint.",
            "The brief keeps one message. A second message makes the action ambiguous, and the metric no longer measures one stage. The creative work happens inside that one sentence. It does not start a second job."
          ]
        },
        "case": {
          "zh": [
            "负责人写下的简报是：「这个月提升岸线的品牌知名度，有创意一点，面向所有中小企。」预算港币二万。没有动作，没有证明，没有数。",
            "上一讲的数已经说明，紧的是演示，不是曝光。这份简报如果拿去给设计和投放的人，他们只能去买更多人看见，因为简报奖励的就是知名度。"
          ],
          "zhHant": [
            "負責人寫下的簡報是：「這個月提升岸線的品牌知名度，有創意一點，面向所有中小企。」預算港幣二萬。沒有動作，沒有證明，沒有數。",
            "上一講的數已經說明，緊的是演示，不是曝光。這份簡報如果拿去給設計和投放的人，他們只能去買更多人看見，因為簡報獎勵的就是知名度。"
          ],
          "en": [
            "The lead’s brief says: “This month, raise awareness of Anxian, be creative, for all SMEs.” The budget is HK$20,000. There is no action, no proof, and no number.",
            "Last lecture’s numbers already say demos are tight, not impressions. Hand this brief to design and to the person buying media, and they can only buy more people seeing it, because the brief rewards awareness."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 130,
            "prompt": {
              "zh": "把这份简报换成六样：目标、受众、信息、证明、动作、指标。指标要用上一讲里紧的那一层，并写上一个日期。",
              "zhHant": "把這份簡報換成六樣：目標、受衆、信息、證明、動作、指標。指標要用上一講裡緊的那一層，並寫上一個日期。",
              "en": "Replace the brief with the six parts: objective, audience, message, proof, action, and metric. The metric has to be last lecture’s tight stage, and it needs a date."
            }
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "哪一个目标能在日期上对上？",
              "zhHant": "哪一個目標能在日期上對上？",
              "en": "Which objective can be checked on a date?"
            },
            "options": [
              {
                "zh": "提升知名度，并且有创意一点。",
                "zhHant": "提升知名度，並且有創意一點。",
                "en": "Raise awareness, and be creative."
              },
              {
                "zh": "六月三十日前，从贸易公司的财务文员那里约到四十次演示。",
                "zhHant": "六月三十日前，從貿易公司的財務文員那裡約到四十次演示。",
                "en": "By 30 June, forty booked demos from finance clerks at trading firms."
              },
              {
                "zh": "成为最受信赖的品牌。",
                "zhHant": "成為最受信賴的品牌。",
                "en": "Become the most trusted brand."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "设计师想在同一页加上手机应用的第二句信息。为什么这份简报拒绝？",
              "zhHant": "設計師想在同一頁加上手機應用的第二句信息。為什麼這份簡報拒絕？",
              "en": "A designer wants a second message on the same page, about a mobile app. Why does this brief refuse it?"
            },
            "options": [
              {
                "zh": "第二句信息会让人不知道动作是预约演示，指标也不再只量这一层。",
                "zhHant": "第二句信息會讓人不知道動作是預約演示，指標也不再只量這一層。",
                "en": "A second message makes it unclear that the action is booking a demo, and the metric no longer measures one stage."
              },
              {
                "zh": "因为手机应用不该存在。",
                "zhHant": "因為手機應用不該存在。",
                "en": "Because a mobile app should not exist."
              },
              {
                "zh": "因为简报越长越专业，所以不该拒绝。",
                "zhHant": "因為簡報越長越專業，所以不該拒絕。",
                "en": "Because a longer brief is more professional, so it should not be refused."
              }
            ]
          }
        ]
      }
    ]
  },
  "renshi": {
    "title": {
      "zh": "用职务分析、结构化面试和 SBI 完成一次聘用",
      "zhHant": "用職務分析、結構化面試和 SBI 完成一次聘用",
      "en": "Hire with job analysis, a structured interview, and SBI"
    },
    "minutes": 45,
    "lessons": [
      {
        "title": {
          "zh": "标准必须看得见",
          "zhHant": "標準必須看得見",
          "en": "A criterion has to be visible"
        },
        "concept": {
          "zh": [
            "聘用从工作出发，不从性格词出发。职务分析把岗位拆开：实际要做的任务，以及做好它需要的知识、技能和可观察的行为。知识、技能和行为要能被第三人核对。「积极」「细心」「合拍」可以安在任何人身上，不能当标准。",
            "标准分必须有和可以有。必须有的，是缺了就做不了这件工作的行为。可以有的，是有了更好，但没有也能在入职后教。把可以有写成必须有，你会在一大叠申请里找不到人，或为了一个无关的习惯刷掉做得了工作的人。",
            "一条必须有的标准要写到时间和留下的东西：在什么时点前，留下一份别人能对上的记录。留下的是数量、表格或成品，不是「感觉不错」。"
          ],
          "zhHant": [
            "聘用從工作出發，不從性格詞出發。職務分析把崗位拆開：實際要做的任務，以及做好它需要的知識、技能和可觀察的行為。知識、技能和行為要能被第三人核對。「積極」「細心」「合拍」可以安在任何人身上，不能當標準。",
            "標準分必須有和可以有。必須有的，是缺了就做不了這件工作的行為。可以有的，是有了更好，但沒有也能在入職後教。把可以有寫成必須有，你會在一大疊申請裡找不到人，或為了一個無關的習慣刷掉做得了工作的人。",
            "一條必須有的標準要寫到時間和留下的東西：在什麼時點前，留下一份別人能對上的記錄。留下的是數量、表格或成品，不是「感覺不錯」。"
          ],
          "en": [
            "Hiring starts from the work, not from a personality word. Job analysis splits the role into the tasks actually done, and the knowledge, skills, and observable behavior the work needs. A third person has to be able to check those. “Proactive,” “careful,” and “one of us” can be pinned on anyone, so they are not criteria.",
            "Split criteria into must-have and nice-to-have. A must-have is a behavior without which the work cannot be done. A nice-to-have is better if present, and teachable after the person starts. Writing a nice-to-have as a must-have either finds nobody in the pile, or rejects someone who can do the work because of an unrelated habit.",
            "A must-have names a time and a thing left behind: by this point, a record someone else can match. The record is a count, a form, or a finished piece. It is not “a good feeling.”"
          ]
        },
        "case": {
          "zh": [
            "澄湾有四十人，要在观塘开第二个场地，聘一名营运协调。招聘的人说「找像我们的、积极的，尽快」。申请已经有八十六份。",
            "这件工作实际是：工作日九点半前收进场的货，当天上午把异常记进同一份表，十点前向场地负责人交上数量。交上去的是数量，不是一句形容词。第二语言是可以有：没有它，收货和异常表仍然做得到。"
          ],
          "zhHant": [
            "澄灣有四十人，要在觀塘開第二個場地，聘一名營運協調。招聘的人說「找像我們的、積極的，儘快」。申請已經有八十六份。",
            "這件工作實際是：工作日九點半前收進場的貨，當天上午把異常記進同一份表，十點前向場地負責人交上數量。交上去的是數量，不是一句形容詞。第二語言是可以有：沒有它，收貨和異常表仍然做得到。"
          ],
          "en": [
            "Chengwan has forty people and is opening a second site in Kwun Tong. They are hiring one operations coordinator. The hiring manager says “someone like us, proactive, as soon as possible.” Eighty-six applications are already in.",
            "The work is: on a weekday, receive the inbound deliveries before 9:30, log exceptions on the same form that morning, and hand the site lead the counts by 10:00. What gets handed over is counts, not an adjective. A second language is nice-to-have: without it, the deliveries and the exception form can still be done."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 90,
            "prompt": {
              "zh": "把「积极」写成澄湾这份工作的一条必须有标准。要有时点，要有留下的东西。",
              "zhHant": "把「積極」寫成澄灣這份工作的一條必須有標準。要有時點，要有留下的東西。",
              "en": "Turn “proactive” into one must-have for this Chengwan job. It needs a time, and something left behind."
            }
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "哪一条才是必须有，不是性格？",
              "zhHant": "哪一條才是必須有，不是性格？",
              "en": "Which line is a must-have, not a personality?"
            },
            "options": [
              {
                "zh": "性格开朗，和我们合拍。",
                "zhHant": "性格開朗，和我們合拍。",
                "en": "Cheerful, and one of us."
              },
              {
                "zh": "工作日九点半前完成收货，并在十点前交出异常数量。",
                "zhHant": "工作日九點半前完成收貨，並在十點前交出異常數量。",
                "en": "On a weekday, finish receiving before 9:30 and hand over the exception counts by 10:00."
              },
              {
                "zh": "最好会一种第二语言。",
                "zhHant": "最好會一種第二語言。",
                "en": "It would be nice if they spoke a second language."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "「会第二语言」在这份工作里该怎么放？",
              "zhHant": "「會第二語言」在這份工作裡該怎麼放？",
              "en": "Where does “speaks a second language” belong in this job?"
            },
            "options": [
              {
                "zh": "写成必须有，否则这份申请不看。",
                "zhHant": "寫成必須有，否則這份申請不看。",
                "en": "As a must-have, or the application is not read."
              },
              {
                "zh": "写成性格，面试时凭感觉。",
                "zhHant": "寫成性格，面試時憑感覺。",
                "en": "As personality, judged by feel in the interview."
              },
              {
                "zh": "写成可以有：没有它，收货和异常表仍然做得到。",
                "zhHant": "寫成可以有：沒有它，收貨和異常表仍然做得到。",
                "en": "As a nice-to-have: without it, receiving and the exception form can still be done."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "结构化面试问的是行为",
          "zhHant": "結構化面試問的是行為",
          "en": "A structured interview asks for behavior"
        },
        "concept": {
          "zh": [
            "结构化面试是：问题从必须有的标准来，每个候选人被问同一组问题，记录的是行为不是好感。闲聊兴趣，或者每人问不同的题，都不是结构。问题相同、却在问感受，也不是。问题要指向工作里发生过的行为。",
            "STAR 把一次经历问完整：当时的情境，这个人被交给的任务，这个人自己做的行动，以及一个能核对的结果。候选人说「我们」，你要追问哪一步是他做的。没有结果，这段经历还不能当证据。",
            "「我喜欢他」不是证据。证据是他哪一条标准和哪一次行为对上了。好感会让你少追问。结构的作用，就是在好感作主之前把行为记下来。"
          ],
          "zhHant": [
            "結構化面試是：問題從必須有的標準來，每個候選人被問同一組問題，記錄的是行為不是好感。閒聊興趣，或者每人問不同的題，都不是結構。問題相同、卻在問感受，也不是。問題要指向工作裡發生過的行為。",
            "STAR 把一次經歷問完整：當時的情境，這個人被交給的任務，這個人自己做的行動，以及一個能核對的結果。候選人說「我們」，你要追問哪一步是他做的。沒有結果，這段經歷還不能當證據。",
            "「我喜歡他」不是證據。證據是他哪一條標準和哪一次行為對上了。好感會讓你少追問。結構的作用，就是在好感作主之前把行為記下來。"
          ],
          "en": [
            "A structured interview means the questions come from the must-haves, every candidate is asked the same set, and what you record is behavior, not liking. Chatting about hobbies, or asking each person different questions, is not structure. Asking the same questions about feelings is not structure either. The questions point at behavior that happened in the work.",
            "STAR fills in one episode: the situation, the task this person was given, the action this person took, and a result someone can check. When a candidate says “we,” you ask which step they did. Without a result, the episode is not evidence yet.",
            "“I liked them” is not evidence. Evidence is which criterion matched which behavior. Liking makes you probe less. The point of structure is to write the behavior down before liking decides."
          ]
        },
        "case": {
          "zh": [
            "一位候选人说：「我们团队总是把货处理得很好，大家都觉得我很积极。」面试官准备因此通过，因为聊得来。",
            "另一位说了一个清晨：货晚到二十分钟，他本人改了收货顺序，九点半前把缺的两箱记进异常表，十点的数量和仓库事后的单对得上。面试官觉得这位没那么聊得来。"
          ],
          "zhHant": [
            "一位候選人說：「我們團隊總是把貨處理得很好，大家都覺得我很積極。」面試官準備因此通過，因為聊得來。",
            "另一位說了一個清晨：貨晚到二十分鐘，他本人改了收貨順序，九點半前把缺的兩箱記進異常表，十點的數量和倉庫事後的單對得上。面試官覺得這位沒那麼聊得來。"
          ],
          "en": [
            "One candidate says: “Our team always handles the deliveries well, and everyone thinks I am proactive.” The interviewer is ready to pass them because the chat felt easy.",
            "Another describes one morning: the delivery was twenty minutes late, they changed the receiving order themselves, logged the two missing cartons on the exception form before 9:30, and the 10:00 counts matched the warehouse slip later. The interviewer finds this person less easy to chat with."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "哪一段能当这条标准的证据？",
              "zhHant": "哪一段能當這條標準的證據？",
              "en": "Which account can be evidence for this criterion?"
            },
            "options": [
              {
                "zh": "第二位：晚到、他自己改了顺序、异常表和仓库的单对得上。",
                "zhHant": "第二位：晚到、他自己改了順序、異常表和倉庫的單對得上。",
                "en": "The second: it was late, they changed the order themselves, and the exception form matched the warehouse slip."
              },
              {
                "zh": "第一位：我们团队总是很好，大家觉得他积极。",
                "zhHant": "第一位：我們團隊總是很好，大家覺得他積極。",
                "en": "The first: our team is always good, and everyone thinks they are proactive."
              },
              {
                "zh": "面试官觉得第一位更聊得来，所以第一位更好。",
                "zhHant": "面試官覺得第一位更聊得來，所以第一位更好。",
                "en": "The interviewer enjoyed the first conversation more, so the first candidate is better."
              }
            ]
          },
          {
            "kind": "write",
            "min": 90,
            "prompt": {
              "zh": "第一位说「我们」。写两个追问，把缺掉的个人行动和能核对的结果问出来。追问要指着收货，不是问性格。",
              "zhHant": "第一位說「我們」。寫兩個追問，把缺掉的個人行動和能核對的結果問出來。追問要指著收貨，不是問性格。",
              "en": "The first candidate said “we.” Write two follow-up questions that ask for the missing personal action and a result someone can check. Point them at receiving, not at personality."
            }
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "为什么不能因为聊得来就停？",
              "zhHant": "為什麼不能因為聊得來就停？",
              "en": "Why is “easy to chat with” not a place to stop?"
            },
            "options": [
              {
                "zh": "因为聊得来说明他合拍，合拍就是这条标准。",
                "zhHant": "因為聊得來說明他合拍，合拍就是這條標準。",
                "en": "Because an easy chat shows they fit, and fit is the criterion."
              },
              {
                "zh": "因为好感会让你少追问「我们」后面到底是谁做的，标准还没有被行为对上。",
                "zhHant": "因為好感會讓你少追問「我們」後面到底是誰做的，標準還沒有被行為對上。",
                "en": "Because liking makes you less likely to ask who actually did the work behind “we,” so the criterion has not been matched to a behavior."
              },
              {
                "zh": "因为结构化面试禁止任何交谈。",
                "zhHant": "因為結構化面試禁止任何交談。",
                "en": "Because a structured interview forbids any conversation."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "入职是把聘用时说的话做成第一月",
          "zhHant": "入職是把聘用時說的話做成第一月",
          "en": "Onboarding is the promise, made into the first month"
        },
        "concept": {
          "zh": [
            "录用时说出的工作，就是对方同意进来的条件。这常被叫作心理契约：对方相信的那一套交换。入职不是欢迎午餐。第一月要让他做职务分析里的那件工作，有一个指名的人可以问，并在大约第三十天用同一条标准看一次。",
            "如果说的是参与场地策略，第一月却只有九点半的收货表，而你等到人想走才解释，条件在入职前就已经破了。做不到的部分在开工前说，并写明第一月真正交什么。",
            "第三十天的检查只对照必须有的标准：货、异常表、十点的数量。不在这里补评性格，也不把午餐当成完成。"
          ],
          "zhHant": [
            "錄用時說出的工作，就是對方同意進來的條件。這常被叫作心理契約：對方相信的那一套交換。入職不是歡迎午餐。第一月要讓他做職務分析裡的那件工作，有一個指名的人可以問，並在大約第三十天用同一條標準看一次。",
            "如果說的是參與場地策略，第一月卻只有九點半的收貨表，而你等到人想走才解釋，條件在入職前就已經破了。做不到的部分在開工前說，並寫明第一月真正交什麼。",
            "第三十天的檢查只對照必須有的標準：貨、異常表、十點的數量。不在這裡補評性格，也不把午餐當成完成。"
          ],
          "en": [
            "The work described at offer is the exchange the person agreed to. That belief about the exchange is the psychological contract. Onboarding is not a welcome lunch. The first month has them do the work from the job analysis, names one person they can ask, and looks again at about day thirty against the same criterion.",
            "If you said they would join site strategy, and the first month is only the 9:30 receiving form, explaining that only when they want to leave means the contract was already broken before they started. Say the part you cannot offer before day one, and write down what the first month actually delivers.",
            "The day-thirty check matches the must-have only: deliveries, the exception form, the 10:00 counts. It does not add a verdict on personality, and a lunch does not count as done."
          ]
        },
        "case": {
          "zh": [
            "澄湾口头说：「你会参与观塘场地的整体策略。」入职第一周的安排只有欢迎午餐，和一套没有截止日期的旧手册。九点半的收货没有人告诉他。",
            "第十天，表是空的，他第一次被骂。他以为自己漏掉的是策略会议。条件在开工前没有被说成第一月真正要交的东西。"
          ],
          "zhHant": [
            "澄灣口頭說：「你會參與觀塘場地的整體策略。」入職第一週的安排只有歡迎午餐，和一套沒有截止日期的舊手冊。九點半的收貨沒有人告訴他。",
            "第十天，表是空的，他第一次被罵。他以為自己漏掉的是策略會議。條件在開工前沒有被說成第一月真正要交的東西。"
          ],
          "en": [
            "Chengwan said, verbally: “You will take part in the overall strategy for the Kwun Tong site.” Week one is a welcome lunch and an old handbook with no dates. Nobody tells him about the 9:30 receiving.",
            "On day ten the form is empty, and he is told off for the first time. He thought he had missed a strategy meeting. Before day one, the offer was never restated as what the first month actually delivers."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 110,
            "prompt": {
              "zh": "写一份第一月安排：开工前要说清的那件工作、指名的提问人，以及第三十天对照哪一条标准。不要写欢迎午餐。",
              "zhHant": "寫一份第一月安排：開工前要說清的那件工作、指名的提問人，以及第三十天對照哪一條標準。不要寫歡迎午餐。",
              "en": "Write the first-month plan: the work you will state before day one, the named person they can ask, and which criterion day thirty checks. Do not write a welcome lunch."
            }
          },
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "哪一件事是在修补已经说出的条件？",
              "zhHant": "哪一件事是在修補已經說出的條件？",
              "en": "Which action repairs the promise that was already made?"
            },
            "options": [
              {
                "zh": "把欢迎午餐订在更好的餐厅。",
                "zhHant": "把歡迎午餐訂在更好的餐廳。",
                "en": "Book the welcome lunch at a better restaurant."
              },
              {
                "zh": "等他犯错，再解释这工作其实是收货。",
                "zhHant": "等他犯錯，再解釋這工作其實是收貨。",
                "en": "Wait until he makes a mistake, then explain that the job is receiving."
              },
              {
                "zh": "开工前写明第一月交的是九点半的货和十点的数量，策略不在这三十天里。",
                "zhHant": "開工前寫明第一月交的是九點半的貨和十點的數量，策略不在這三十天裡。",
                "en": "Before day one, write that the first month delivers the 9:30 deliveries and the 10:00 counts, and that strategy is not in these thirty days."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "第三十天该看什么？",
              "zhHant": "第三十天該看什麼？",
              "en": "What does day thirty look at?"
            },
            "options": [
              {
                "zh": "异常表是否在十点前交出，数量能否对上。",
                "zhHant": "異常表是否在十點前交出，數量能否對上。",
                "en": "Whether the exception form was handed over by 10:00, and whether the counts match."
              },
              {
                "zh": "他是否还像我们。",
                "zhHant": "他是否還像我們。",
                "en": "Whether he is still one of us."
              },
              {
                "zh": "欢迎午餐有没有出席。",
                "zhHant": "歡迎午餐有沒有出席。",
                "en": "Whether he attended the welcome lunch."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "反馈记行为和作用，不记人品",
          "zhHant": "反饋記行為和作用，不記人品",
          "en": "Feedback records behavior and impact, not character"
        },
        "concept": {
          "zh": [
            "能让人改的反馈有四段里的前三段，再加一个改法。情境是何时何地。行为是对方做了什么，不是他是什么样的人。作用是这件事让工作变成了什么样。改法只有一个，而且下一次能被看见。",
            "这四段常被收成情境、行为、作用。少了情境，对方不知道你在说哪一次。少了行为，只剩一个形容词。少了作用，他不知道为什么要改。「你很粗心」三样都没有。",
            "记录里不写传闻，不写与这条工作无关的身份。那些既不能核对，也不能当标准。不能核对的句子，下一次无法用来看他有没有改。"
          ],
          "zhHant": [
            "能讓人改的反饋有四段裡的前三段，再加一個改法。情境是何時何地。行為是對方做了什麼，不是他是什麼樣的人。作用是這件事讓工作變成了什麼樣。改法只有一個，而且下一次能被看見。",
            "這四段常被收成情境、行為、作用。少了情境，對方不知道你在說哪一次。少了行為，只剩一個形容詞。少了作用，他不知道為什麼要改。「你很粗心」三樣都沒有。",
            "記錄裡不寫傳聞，不寫與這條工作無關的身份。那些既不能核對，也不能當標準。不能核對的句子，下一次無法用來看他有沒有改。"
          ],
          "en": [
            "Feedback a person can act on has the situation, the behavior, the impact, and one change. Situation is when and where. Behavior is what they did, not what kind of person they are. Impact is what the work became because of it. The change is one thing, and visible the next time.",
            "Those pieces are situation, behavior, and impact. Without the situation, they do not know which time you mean. Without the behavior, only an adjective is left. Without the impact, they do not know why to change. “You are careless” has none of the three.",
            "The record does not include rumor, and it does not include an identity that has nothing to do with this work. Those cannot be checked, and they cannot be criteria. A sentence that cannot be checked cannot be used next time to see whether they changed."
          ]
        },
        "case": {
          "zh": [
            "场地负责人想写：「阿朗很粗心，大家都不喜欢和他交接。」",
            "能核对的事实是：星期四货晚到，阿朗没有把缺的两箱写进异常表，十点的数量少了两箱，仓库下午才发现。下一次能看见的改法，是晚到的货在九点半前把缺的箱数写进同一份表。"
          ],
          "zhHant": [
            "場地負責人想寫：「阿朗很粗心，大家都不喜歡和他交接。」",
            "能核對的事實是：星期四貨晚到，阿朗沒有把缺的兩箱寫進異常表，十點的數量少了兩箱，倉庫下午才發現。下一次能看見的改法，是晚到的貨在九點半前把缺的箱數寫進同一份表。"
          ],
          "en": [
            "The site lead wants to write: “Ah Long is careless, and nobody likes handing work to him.”",
            "The checkable facts are: on Thursday the delivery was late, Ah Long did not write the two missing cartons on the exception form, the 10:00 counts were short by two, and the warehouse found out in the afternoon. The change that can be seen next time is: when a delivery is late, the missing count is on that same form before 9:30."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 110,
            "prompt": {
              "zh": "用情境、行为、作用写给阿朗的一段反馈，并给一个下一次能看见的改法。不要写「粗心」，也不要写「大家不喜欢」。",
              "zhHant": "用情境、行為、作用寫給阿朗的一段反饋，並給一個下一次能看見的改法。不要寫「粗心」，也不要寫「大家不喜歡」。",
              "en": "Write Ah Long’s feedback with situation, behavior, and impact, plus one change that can be seen next time. Do not write “careless,” and do not write “nobody likes.”"
            }
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "哪一句不能进记录？",
              "zhHant": "哪一句不能進記錄？",
              "en": "Which sentence does not belong in the record?"
            },
            "options": [
              {
                "zh": "星期四十点的数量少了两箱，因为异常表里没有那两箱。",
                "zhHant": "星期四十點的數量少了兩箱，因為異常表裡沒有那兩箱。",
                "en": "Thursday’s 10:00 counts were short by two cartons, because those two were not on the exception form."
              },
              {
                "zh": "大家都不喜欢和他交接。",
                "zhHant": "大家都不喜歡和他交接。",
                "en": "Nobody likes handing work to him."
              },
              {
                "zh": "下一次晚到时，九点半前把缺的箱数写进同一份表。",
                "zhHant": "下一次晚到時，九點半前把缺的箱數寫進同一份表。",
                "en": "Next time a delivery is late, write the missing count on the same form before 9:30."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "「你很粗心」差在哪里？",
              "zhHant": "「你很粗心」差在哪裡？",
              "en": "What is missing from “you are careless”?"
            },
            "options": [
              {
                "zh": "它没有情境和行为，对方不能照着改下一次的表。",
                "zhHant": "它沒有情境和行為，對方不能照著改下一次的表。",
                "en": "It has no situation and no behavior, so he cannot change the next form from it."
              },
              {
                "zh": "它已经太具体，具体到无法执行。",
                "zhHant": "它已經太具體，具體到無法執行。",
                "en": "It is already too specific to act on."
              },
              {
                "zh": "它已经包含了作用和改法。",
                "zhHant": "它已經包含了作用和改法。",
                "en": "It already includes the impact and the change."
              }
            ]
          }
        ]
      }
    ]
  },
  "kaifa": {
    "title": {
      "zh": "交一页能读、能提交、也能拒绝坏数据的页面",
      "zhHant": "交一頁能讀、能提交、也能拒絕壞數據的頁面",
      "en": "Ship a page that can be read, submitted, and that refuses bad data"
    },
    "minutes": 50,
    "lessons": [
      {
        "title": {
          "zh": "语义，和可访问性的四项",
          "zhHant": "語義，和可訪問性的四項",
          "en": "Semantics, and the four accessibility duties"
        },
        "concept": {
          "zh": [
            "页面先是一份有结构的文档，然后才是样子。标题按层级排，只读标题就知道大纲。按钮是一个动作。链接是去另一个地方。用一个只有点击的 div 冒充按钮，键盘到不了，辅助技术也不知道那是一个控件，焦点也没有浏览器本来就会给的行为。",
            "可访问性常被收成四项。可感知：信息不能只靠一种看得到的方式存在。可操作：键盘和焦点到得了控件。可理解：标签和标题说的是这件工作，单独念出来也成立。足够稳固：用浏览器本来就懂的元素，而不是临时拼一个看起来像的东西。",
            "标签要和输入框连上：label 的 for 等于输入框的 id。没有这条线，只听不看的人听到的是「编辑文字」，不知道该填电话还是地点。「点击这里」在一列控件里没有意义，因为它没有说出会提交什么。"
          ],
          "zhHant": [
            "頁面先是一份有結構的文檔，然後才是樣子。標題按層級排，只讀標題就知道大綱。按鈕是一個動作。鏈接是去另一個地方。用一個只有點擊的 div 冒充按鈕，鍵盤到不了，輔助技術也不知道那是一個控件，焦點也沒有瀏覽器本來就會給的行為。",
            "可訪問性常被收成四項。可感知：信息不能只靠一種看得到的方式存在。可操作：鍵盤和焦點到得了控件。可理解：標籤和標題說的是這件工作，單獨念出來也成立。足夠穩固：用瀏覽器本來就懂的元素，而不是臨時拼一個看起來像的東西。",
            "標籤要和輸入框連上：label 的 for 等於輸入框的 id。沒有這條線，只聽不看的人聽到的是「編輯文字」，不知道該填電話還是地點。「點擊這裡」在一列控件裡沒有意義，因為它沒有說出會提交什麼。"
          ],
          "en": [
            "A page is a document with a structure before it is a look. Headings run in order, and the headings alone are the outline. A button is an action. A link goes somewhere. A div that only listens for a click is not a button: the keyboard cannot reach it, assistive technology is not told it is a control, and it has none of the focus behavior the browser would have given a button.",
            "Accessibility is often gathered into four duties. Perceivable: the information does not exist only as something a person can see. Operable: keyboard and focus can reach the control. Understandable: the label and the heading name the job, and still make sense read alone. Robust: use an element the browser already understands, rather than assembling something that only looks like one.",
            "A label is tied to its field: the label’s for matches the input’s id. Without that tie, a person who hears the page hears “edit text” and does not know whether to type a phone number or a place. “Click here,” read in a list of controls, says nothing about what will be submitted."
          ]
        },
        "case": {
          "zh": [
            "宿舍六楼要交一页失物页。每条记录有三样：物品名称、拾到的地点、联系电话，再加上一个告诉宿舍办公处的提交。",
            "现在的页面用三个没有标签的框。提交是一个 div，写着「点击这里」。标题从很大的字直接跳进正文，中间缺了层级。办公处的人用键盘走这页时，停不到那个 div 上。"
          ],
          "zhHant": [
            "宿舍六樓要交一頁失物頁。每條記錄有三樣：物品名稱、拾到的地點、聯繫電話，再加上一個告訴宿舍辦公處的提交。",
            "現在的頁面用三個沒有標籤的框。提交是一個 div，寫著「點擊這裡」。標題從很大的字直接跳進正文，中間缺了層級。辦公處的人用鍵盤走這頁時，停不到那個 div 上。"
          ],
          "en": [
            "The sixth-floor residence needs a lost-and-found page. Each record has three fields: the item’s name, where it was found, and a phone number, plus a submit that tells the residence office.",
            "The page now has three unlabeled boxes. Submit is a div that says “click here.” The headings jump from a very large line straight into body text, so a level is missing. When the office walks the page by keyboard, they cannot stop on that div."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "提交为什么不能用 div？",
              "zhHant": "提交為什麼不能用 div？",
              "en": "Why can submit not be a div?"
            },
            "options": [
              {
                "zh": "因为 div 比较新，浏览器不支持。",
                "zhHant": "因為 div 比較新，瀏覽器不支持。",
                "en": "Because a div is newer, and browsers do not support it."
              },
              {
                "zh": "因为键盘和辅助技术得不到按钮这个控件，焦点也没有按钮默认的行为。",
                "zhHant": "因為鍵盤和輔助技術得不到按鈕這個控件，焦點也沒有按鈕默認的行為。",
                "en": "Because the keyboard and assistive technology never get a button, and focus has none of a button’s default behavior."
              },
              {
                "zh": "因为 div 不能有文字。",
                "zhHant": "因為 div 不能有文字。",
                "en": "Because a div cannot contain text."
              }
            ]
          },
          {
            "kind": "write",
            "min": 100,
            "prompt": {
              "zh": "给三个框各写一个单独念出来也成立的标签，并说明标签怎样和框连上。不要写「点击这里」。",
              "zhHant": "給三個框各寫一個單獨念出來也成立的標籤，並說明標籤怎樣和框連上。不要寫「點擊這裡」。",
              "en": "Write a label for each of the three fields that still makes sense read alone, and say how the label is tied to the field. Do not write “click here.”"
            }
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "「点击这里」主要违背四项里的哪一项？",
              "zhHant": "「點擊這裡」主要違背四項裡的哪一項？",
              "en": "Which of the four duties does “click here” mainly fail?"
            },
            "options": [
              {
                "zh": "可理解：单独念出来不知道会提交什么。",
                "zhHant": "可理解：單獨念出來不知道會提交什麼。",
                "en": "Understandable: read alone, it does not say what will be submitted."
              },
              {
                "zh": "可感知：因为这四个字太小。",
                "zhHant": "可感知：因為這四個字太小。",
                "en": "Perceivable: because the four words are too small."
              },
              {
                "zh": "足够稳固：因为服务器会拒绝这个词。",
                "zhHant": "足夠穩固：因為服務器會拒絕這個詞。",
                "en": "Robust: because the server will reject those words."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "方法和状态码才是结果",
          "zhHant": "方法和狀態碼才是結果",
          "en": "The method and the status code are the result"
        },
        "concept": {
          "zh": [
            "浏览器发出的是一次请求：方法加上路径。常见的读取是 GET。提交一份新记录常用 POST。服务器回的是状态码和正文。正文可能是一份文档，也可能是一段数据。两种正文不要当成同一种成功。",
            "状态码是结果，不是装饰。200 是读到了。201 是新记录建成了。400 是你交上的内容不能用。401 是还没有证明你是谁。403 是已经证明了你是谁，但这件事你不被允许做。500 是服务器自己失败了。页面在 500 时仍显示「已保存」，是在谎报。",
            "先看状态，再改页面上的句子。慢可以再试。400 要指出是哪一项不能用。401 要去证明身份。403 不要装成没登录。500 不要让人以为记录已经在。"
          ],
          "zhHant": [
            "瀏覽器發出的是一次請求：方法加上路徑。常見的讀取是 GET。提交一份新記錄常用 POST。服務器回的是狀態碼和正文。正文可能是一份文檔，也可能是一段數據。兩種正文不要當成同一種成功。",
            "狀態碼是結果，不是裝飾。200 是讀到了。201 是新記錄建成了。400 是你交上的內容不能用。401 是還沒有證明你是誰。403 是已經證明了你是誰，但這件事你不被允許做。500 是服務器自己失敗了。頁面在 500 時仍顯示「已保存」，是在謊報。",
            "先看狀態，再改頁面上的句子。慢可以再試。400 要指出是哪一項不能用。401 要去證明身份。403 不要裝成沒登入。500 不要讓人以為記錄已經在。"
          ],
          "en": [
            "The browser sends a request: a method and a path. A common read is GET. Creating a record is often POST. The server answers with a status code and a body. The body may be a document or a piece of data. Do not treat those two bodies as the same kind of success.",
            "The status code is the result, not decoration. 200 means the read succeeded. 201 means a new record was created. 400 means what you sent cannot be used. 401 means you have not yet shown who you are. 403 means you have shown who you are, and you are not allowed to do this. 500 means the server itself failed. A page that shows “saved” on a 500 is reporting a lie.",
            "Read the status before you change the sentence on the page. Slow can be tried again. A 400 should say which field cannot be used. A 401 should go and prove identity. A 403 should not be dressed up as “not signed in.” A 500 should not leave the person thinking the record exists."
          ]
        },
        "case": {
          "zh": [
            "同学填了电话，按下提交。服务器回了 500，页面仍变绿，写着「已保存」。办公处的表里没有这条。",
            "另一次，地点空着，服务器回 400。页面只写「出错了」，不说是地点。还有一次，一名没有登录的同学提交，服务器回 401；一名已经登录的同学想导出全部电话，服务器回了 403。"
          ],
          "zhHant": [
            "同學填了電話，按下提交。服務器回了 500，頁面仍變綠，寫著「已保存」。辦公處的表裡沒有這條。",
            "另一次，地點空著，服務器回 400。頁面只寫「出錯了」，不說是地點。還有一次，一名沒有登入的同學提交，服務器回 401；一名已經登入的同學想導出全部電話，服務器回了 403。"
          ],
          "en": [
            "A student fills in the phone number and submits. The server answers 500. The page still turns green and says “saved.” The office’s list does not have the record.",
            "Another time the place is empty and the server answers 400. The page only says “something went wrong,” and does not say it was the place. Another time a student who is not signed in submits and the server answers 401. A student who is signed in tries to export every phone number, and the server answers 403."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "状态是 500 时，页面不该做什么？",
              "zhHant": "狀態是 500 時，頁面不該做什麼？",
              "en": "When the status is 500, what should the page not do?"
            },
            "options": [
              {
                "zh": "告诉人服务器没有建成记录，可以再试。",
                "zhHant": "告訴人服務器沒有建成記錄，可以再試。",
                "en": "Tell them the server did not create the record, and that they can try again."
              },
              {
                "zh": "把已经填的内容留在表单里，不要清掉。",
                "zhHant": "把已經填的內容留在表單裡，不要清掉。",
                "en": "Leave what they typed in the form, and do not clear it."
              },
              {
                "zh": "显示绿色的「已保存」。",
                "zhHant": "顯示綠色的「已保存」。",
                "en": "Show a green “saved.”"
              }
            ]
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "地点空着，服务器回了 400。页面该说什么？",
              "zhHant": "地點空著，服務器回了 400。頁面該說什麼？",
              "en": "The place is empty and the server answered 400. What should the page say?"
            },
            "options": [
              {
                "zh": "地点没有填，记录没有建成。",
                "zhHant": "地點沒有填，記錄沒有建成。",
                "en": "The place is empty, and the record was not created."
              },
              {
                "zh": "已保存。",
                "zhHant": "已保存。",
                "en": "Saved."
              },
              {
                "zh": "你没有登录。",
                "zhHant": "你沒有登入。",
                "en": "You are not signed in."
              }
            ]
          },
          {
            "kind": "write",
            "min": 90,
            "prompt": {
              "zh": "用自己的话写出 401 和 403 的差别，并各给失物页一个例子：谁会遇到 401，谁会遇到 403。",
              "zhHant": "用自己的話寫出 401 和 403 的差別，並各給失物頁一個例子：誰會遇到 401，誰會遇到 403。",
              "en": "In your own words, write the difference between 401 and 403, and give the lost-and-found one example of each: who gets a 401, and who gets a 403."
            }
          }
        ]
      },
      {
        "title": {
          "zh": "浏览器里的检查不是记录",
          "zhHant": "瀏覽器裡的檢查不是記錄",
          "en": "A check in the browser is not the record"
        },
        "concept": {
          "zh": [
            "浏览器里的检查是给正在打字的人：少走一次来回。服务器上的检查才是记录。任何人都可以绕过页面，自己发一次请求。只在页面上禁止字母，挡不住一次直接发来的请求。",
            "把失物描述当成 HTML 插进页面，是把下一位读者的浏览器交给写描述的人。描述里如果有一段脚本，下一位打开列表的人就会执行它。描述要作为文字放进去，不作为 HTML。文字里的脚本只是字，不会跑。",
            "电话是否像一个电话，两边都可以提示。但「像」不能代替服务器拒绝空的地点、过长的描述，以及一段被当成 HTML 的内容。页面上的检查可能根本没有运行。"
          ],
          "zhHant": [
            "瀏覽器裡的檢查是給正在打字的人：少走一次來回。服務器上的檢查才是記錄。任何人都可以繞過頁面，自己發一次請求。只在頁面上禁止字母，擋不住一次直接發來的請求。",
            "把失物描述當成 HTML 插進頁面，是把下一位讀者的瀏覽器交給寫描述的人。描述裡如果有一段腳本，下一位打開列表的人就會執行它。描述要作為文字放進去，不作為 HTML。文字裡的腳本只是字，不會跑。",
            "電話是否像一個電話，兩邊都可以提示。但「像」不能代替服務器拒絕空的地點、過長的描述，以及一段被當成 HTML 的內容。頁面上的檢查可能根本沒有運行。"
          ],
          "en": [
            "A check in the browser is for the person who is typing: it saves a round trip. The check on the server is the record. Anyone can skip the page and send the request themselves. Blocking letters only on the page does not block a request that never went through the page.",
            "Inserting a found-item description as HTML hands the next reader’s browser to the person who wrote the description. If the description contains a script, the next person who opens the list runs it. Put the description in as text, not as HTML. A script that is text is only characters. It does not run.",
            "Both sides can hint that a phone number does not look like one. Looking like one does not replace the server refusing an empty place, an over-long description, or content that was treated as HTML. The check on the page may never have run."
          ]
        },
        "case": {
          "zh": [
            "页面用一段脚本禁止电话栏出现字母。同学以为这样就安全了。有人没有打开这页，直接向提交地址发了一条请求：地点是空的，描述里夹着一段脚本。",
            "列表页把描述按 HTML 插入。下一位同学打开列表时，那段脚本在他自己的浏览器里跑了。服务器没有拒绝空的地点，也没有把描述当成文字。"
          ],
          "zhHant": [
            "頁面用一段腳本禁止電話欄出現字母。同學以為這樣就安全了。有人沒有打開這頁，直接向提交地址發了一條請求：地點是空的，描述裡夾著一段腳本。",
            "列表頁把描述按 HTML 插入。下一位同學打開列表時，那段腳本在他自己的瀏覽器裡跑了。服務器沒有拒絕空的地點，也沒有把描述當成文字。"
          ],
          "en": [
            "A script on the page stops letters in the phone field. The students think that makes it safe. Someone never opens the page and sends a request straight to the submit address: the place is empty, and the description contains a script.",
            "The list inserts the description as HTML. When the next student opens the list, that script runs in their browser. The server did not refuse the empty place, and it did not treat the description as text."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "页面上的电话检查挡得住哪一种情况？",
              "zhHant": "頁面上的電話檢查擋得住哪一種情況？",
              "en": "Which case does the phone check on the page actually stop?"
            },
            "options": [
              {
                "zh": "任何请求，包括绕过页面直接发送的。",
                "zhHant": "任何請求，包括繞過頁面直接發送的。",
                "en": "Any request, including one sent past the page."
              },
              {
                "zh": "只挡得住在这个页面里打字的人，挡不住自己发出的请求。",
                "zhHant": "只擋得住在這個頁面裡打字的人，擋不住自己發出的請求。",
                "en": "Only a person typing on this page. It does not stop a request they send themselves."
              },
              {
                "zh": "挡得住服务器的 500。",
                "zhHant": "擋得住服務器的 500。",
                "en": "It stops a 500 from the server."
              }
            ]
          },
          {
            "kind": "write",
            "min": 100,
            "prompt": {
              "zh": "说明失物描述应该怎样放进列表，以及为什么按 HTML 插入会害到下一位读者。答案里要有「文字」，也要有脚本会在谁的浏览器里跑。",
              "zhHant": "說明失物描述應該怎樣放進列表，以及為什麼按 HTML 插入會害到下一位讀者。答案裡要有「文字」，也要有腳本會在誰的瀏覽器裡跑。",
              "en": "Say how a found-item description should be placed in the list, and why inserting it as HTML harms the next reader. Include “text,” and whose browser the script runs in."
            }
          },
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "地点为空的那次直接请求，谁必须拒绝？",
              "zhHant": "地點為空的那次直接請求，誰必須拒絕？",
              "en": "Who has to refuse the direct request with an empty place?"
            },
            "options": [
              {
                "zh": "只靠页面上的脚本，因为用户看得到它。",
                "zhHant": "只靠頁面上的腳本，因為用戶看得到它。",
                "en": "Only the script on the page, because the user can see it."
              },
              {
                "zh": "谁都不用拒绝，400 只是建议。",
                "zhHant": "誰都不用拒絕，400 只是建議。",
                "en": "Nobody has to refuse it. A 400 is only a suggestion."
              },
              {
                "zh": "服务器。页面上的检查可能根本没有运行。",
                "zhHant": "服務器。頁面上的檢查可能根本沒有運行。",
                "en": "The server. The check on the page may never have run."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "窄屏和键盘也是完成标准",
          "zhHant": "窄屏和鍵盤也是完成標準",
          "en": "A narrow screen and a keyboard are part of done"
        },
        "concept": {
          "zh": [
            "一页只在作者的宽屏上成立，就还没做完。窄的屏幕上应该是一列，不能靠横向滚动才看见提交。输入的字不要小到系统被迫放大整个页面。焦点移动时，人要看得见现在在哪一项。",
            "正文大小的字，和它背后的颜色，对比大约要到 4.5 比 1。浅灰字放在米色上，常常达不到。这不是气质，是这一项读不读得清。颜色不能成为唯一信号：错误不能只变成红色或浅红，还要有文字说是哪一项。",
            "提交要有足够的可点区域，并且能用键盘到达。这和第一节是同一件事：控件首先得是一个真的按钮，然后在窄屏上仍碰得到，焦点仍看得见。"
          ],
          "zhHant": [
            "一頁只在作者的寬屏上成立，就還沒做完。窄的屏幕上應該是一列，不能靠橫向滾動才看見提交。輸入的字不要小到系統被迫放大整個頁面。焦點移動時，人要看得見現在在哪一項。",
            "正文大小的字，和它背後的顏色，對比大約要到 4.5 比 1。淺灰字放在米色上，常常達不到。這不是氣質，是這一項讀不讀得清。顏色不能成為唯一信號：錯誤不能只變成紅色或淺紅，還要有文字說是哪一項。",
            "提交要有足夠的可點區域，並且能用鍵盤到達。這和第一節是同一件事：控件首先得是一個真的按鈕，然後在窄屏上仍碰得到，焦點仍看得見。"
          ],
          "en": [
            "A page that only works on the author’s wide screen is not done. On a narrow screen it should be one column. The person should not have to scroll sideways to find submit. The type in a field should not be so small that the system is forced to zoom the whole page. When focus moves, the person can see which field they are on.",
            "Body-sized text against its background wants a contrast of about 4.5 to 1. Light gray on cream often fails that. That is not a mood. It is whether the line can be read. Color cannot be the only signal: an error cannot only turn red or pale red. It also needs words that say which field.",
            "Submit needs a large enough target, and the keyboard has to be able to reach it. This is the same point as the first lecture: the control has to be a real button, then still reachable on a narrow screen, with a focus the person can see."
          ]
        },
        "case": {
          "zh": [
            "失物页在作者的宽屏上看起来整齐。手机上三个框挤出屏幕右边，要横着滑才找得到那个 div。电话栏的字很小。",
            "地点空着时，只有框的边变成浅红，浅灰的说明写在米色底上。键盘按到那个 div 时没有焦点。宽屏上的整齐没有回答这三件事。"
          ],
          "zhHant": [
            "失物頁在作者的寬屏上看起來整齊。手機上三個框擠出屏幕右邊，要橫著滑才找得到那個 div。電話欄的字很小。",
            "地點空著時，只有框的邊變成淺紅，淺灰的說明寫在米色底上。鍵盤按到那個 div 時沒有焦點。寬屏上的整齊沒有回答這三件事。"
          ],
          "en": [
            "On the author’s wide screen the lost-and-found looks tidy. On a phone the three fields run off the right edge, and the person has to scroll sideways to find the div. The type in the phone field is very small.",
            "When the place is empty, only the border turns pale red, and a light-gray note sits on a cream background. The keyboard reaches the div with no visible focus. Tidiness on a wide screen answers none of these three."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 100,
            "prompt": {
              "zh": "列出这页在手机上还没完成的三件事。每件对应一个概念：横向滚动、对比，或焦点。",
              "zhHant": "列出這頁在手機上還沒完成的三件事。每件對應一個概念：橫向滾動、對比，或焦點。",
              "en": "List three ways this page is not done on a phone. Tie each one to a concept: sideways scrolling, contrast, or focus."
            }
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "错误只把边框变成浅红，缺了什么？",
              "zhHant": "錯誤只把邊框變成淺紅，缺了什麼？",
              "en": "An error that only turns the border pale red is missing what?"
            },
            "options": [
              {
                "zh": "文字说明。颜色不能是唯一信号，浅色边在米色上也未必达得到对比。",
                "zhHant": "文字說明。顏色不能是唯一信號，淺色邊在米色上也未必達得到對比。",
                "en": "Words. Color cannot be the only signal, and a pale border on cream may not reach the contrast either."
              },
              {
                "zh": "更亮的红色。红色够亮就够了。",
                "zhHant": "更亮的紅色。紅色夠亮就夠了。",
                "en": "A brighter red. A bright enough red is enough."
              },
              {
                "zh": "一段脚本，用来禁止再次提交。",
                "zhHant": "一段腳本，用來禁止再次提交。",
                "en": "A script that blocks another submit."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "哪一个才算这页在窄屏上完成？",
              "zhHant": "哪一個才算這頁在窄屏上完成？",
              "en": "Which one counts as done on a narrow screen?"
            },
            "options": [
              {
                "zh": "宽屏上对齐了，手机可以横着滑。",
                "zhHant": "寬屏上對齊了，手機可以橫著滑。",
                "en": "It lines up on a wide screen, and a phone can scroll sideways."
              },
              {
                "zh": "一列排下去，提交不用横向滚动就能到，而且键盘看得见焦点。",
                "zhHant": "一列排下去，提交不用橫向滾動就能到，而且鍵盤看得見焦點。",
                "en": "One column, submit reachable without sideways scrolling, and a focus the keyboard can see."
              },
              {
                "zh": "把字缩到更小，以便塞进屏幕。",
                "zhHant": "把字縮到更小，以便塞進屏幕。",
                "en": "Shrink the type further so it fits on the screen."
              }
            ]
          }
        ]
      }
    ]
  },
  "meishu": {
    "title": {
      "zh": "用层级、字体、对比和网格做一次站得住的版面",
      "zhHant": "用層級、字體、對比和網格做一次站得住的版面",
      "en": "Hold a layout with hierarchy, type, contrast, and a grid"
    },
    "minutes": 40,
    "lessons": [
      {
        "title": {
          "zh": "先决定第一眼停在哪",
          "zhHant": "先決定第一眼停在哪",
          "en": "Decide where the eye stops first"
        },
        "concept": {
          "zh": [
            "层级是你规定的阅读顺序。大小、字重和位置是工具。最大、最重、最靠阅读起点的那一项，就是你要人先知道的那一件。每一项都同样大声，等于没有第一眼。",
            "眯起眼看。如果剩下的是一块平均的灰，层级就没有建立。第一眼应该只剩下那一个信息。其他信息还在，但它们让路。",
            "一张要人做决定的版面，第一眼通常只能有一件事：这个决定需要的那件事实。标志、口号和装饰同时最大，观众无法开始做决定。"
          ],
          "zhHant": [
            "層級是你規定的閱讀順序。大小、字重和位置是工具。最大、最重、最靠閱讀起點的那一項，就是你要人先知道的那一件。每一項都同樣大聲，等於沒有第一眼。",
            "眯起眼看。如果剩下的是一塊平均的灰，層級就沒有建立。第一眼應該只剩下那一個信息。其他信息還在，但它們讓路。",
            "一張要人做決定的版面，第一眼通常只能有一件事：這個決定需要的那件事實。標誌、口號和裝飾同時最大，觀衆無法開始做決定。"
          ],
          "en": [
            "Hierarchy is the reading order you set. Size, weight, and position are the tools. The largest, heaviest thing nearest the start of reading is what you want known first. When every item is equally loud, there is no first glance.",
            "Squint. If what remains is an even gray, hierarchy was not built. The first glance should leave one message. The other information is still there. It yields.",
            "On a layout that asks for a decision, the first glance usually holds one thing: the fact that decision needs. A logo, a slogan, and decoration all at the largest size means the viewer cannot start the decision."
          ]
        },
        "case": {
          "zh": [
            "大学会堂星期六下午两点有一场讲座。学生要决定的只有一件：去不去。去的话，要在两秒内看见时间和课室。",
            "海报上赞助商标志最大。标题、讲者姓名、一句口号和二维码差不多大。时间「星期六 14:00」和课室「会堂 L2」是浅灰小字，放在角落。眯起眼，剩下的是标志和一块平均的灰。"
          ],
          "zhHant": [
            "大學會堂星期六下午兩點有一場講座。學生要決定的只有一件：去不去。去的話，要在兩秒內看見時間和課室。",
            "海報上贊助商標誌最大。標題、講者姓名、一句口號和二維碼差不多大。時間「星期六 14:00」和課室「會堂 L2」是淺灰小字，放在角落。眯起眼，剩下的是標誌和一塊平均的灰。"
          ],
          "en": [
            "There is a talk in the university hall on Saturday at two. A student has one decision: whether to go. If they go, they need the time and the room within two seconds.",
            "On the poster the sponsor’s logo is the largest thing. The title, the speaker’s name, a slogan, and a QR code are about the same size. “Saturday 14:00” and “Hall L2” are small light-gray type in a corner. Squint, and what remains is the logo and an even gray."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 90,
            "prompt": {
              "zh": "这张海报的第一眼应该是什么？哪三样必须让路？说出你用大小、字重还是位置来建立这个顺序。",
              "zhHant": "這張海報的第一眼應該是什麼？哪三樣必須讓路？說出你用大小、字重還是位置來建立這個順序。",
              "en": "What should the first glance on this poster be? Which three things have to yield? Say whether you use size, weight, or position to build that order."
            }
          },
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "眯眼测试失败时长什么样？",
              "zhHant": "眯眼測試失敗時長什麼樣？",
              "en": "What does a failed squint test look like?"
            },
            "options": [
              {
                "zh": "眯起眼后，几乎只剩下标题。",
                "zhHant": "眯起眼後，幾乎只剩下標題。",
                "en": "After squinting, almost only the title remains."
              },
              {
                "zh": "时间和课室比赞助商更先被看见。",
                "zhHant": "時間和課室比贊助商更先被看見。",
                "en": "The time and the room are seen before the sponsor."
              },
              {
                "zh": "眯起眼后是一块平均的灰，标志、标题和口号一样响。",
                "zhHant": "眯起眼後是一塊平均的灰，標誌、標題和口號一樣響。",
                "en": "After squinting there is an even gray, and the logo, title, and slogan are equally loud."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "为什么赞助商标志不能是最大的？",
              "zhHant": "為什麼贊助商標誌不能是最大的？",
              "en": "Why can the sponsor’s logo not be the largest thing?"
            },
            "options": [
              {
                "zh": "因为学生要做的决定是去不去，标志不是那个决定需要的事实。",
                "zhHant": "因為學生要做的決定是去不去，標誌不是那個決定需要的事實。",
                "en": "Because the student’s decision is whether to go, and the logo is not the fact that decision needs."
              },
              {
                "zh": "因为赞助商不该出现在海报上。",
                "zhHant": "因為贊助商不該出現在海報上。",
                "en": "Because a sponsor should not appear on a poster."
              },
              {
                "zh": "因为标志不能有颜色。",
                "zhHant": "因為標誌不能有顏色。",
                "en": "Because a logo cannot have a color."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "事实不能放在最轻的一档",
          "zhHant": "事實不能放在最輕的一檔",
          "en": "A fact does not sit on the lightest step"
        },
        "concept": {
          "zh": [
            "字体层级是一套阶梯，不是很多种字体。标题明显大于次级信息，次级信息明显大于可以错过的说明。同一档上的字用同一种待遇。档与档之间要隔得开，否则又回到平均。",
            "如果有一段需要阅读的正文，一行大约停在四十五到七十五个字符，行距要让下一行不是贴着上一行。海报往往不该有一段正文。一旦有，就要给它正文的待遇，而不是把正文缩成注解。",
            "做决定要用的事实，不能放在最轻、最小的那一档。最轻的一档只给可以错过的信息。把时间做成注解，等于在阶梯上宣布它不重要。"
          ],
          "zhHant": [
            "字體層級是一套階梯，不是很多種字體。標題明顯大於次級信息，次級信息明顯大於可以錯過的說明。同一檔上的字用同一種待遇。檔與檔之間要隔得開，否則又回到平均。",
            "如果有一段需要閱讀的正文，一行大約停在四十五到七十五個字符，行距要讓下一行不是貼著上一行。海報往往不該有一段正文。一旦有，就要給它正文的待遇，而不是把正文縮成註解。",
            "做決定要用的事實，不能放在最輕、最小的那一檔。最輕的一檔只給可以錯過的信息。把時間做成註解，等於在階梯上宣佈它不重要。"
          ],
          "en": [
            "Typographic hierarchy is a scale, not a pile of typefaces. The title is clearly larger than the secondary information, and the secondary information is clearly larger than a note a person can miss. One step gets one treatment. The steps have to be far enough apart, or the page returns to an average.",
            "If there is a paragraph someone must read, a line stops at about forty-five to seventy-five characters, and the leading keeps the next line from sitting on the one above. A poster often should not have a paragraph. If it does, that paragraph gets the treatment of body text, not the treatment of a footnote.",
            "A fact the decision needs cannot sit on the lightest, smallest step. The lightest step is only for what a person can miss. Setting the time as a footnote announces, on the scale, that it does not matter."
          ]
        },
        "case": {
          "zh": [
            "这张海报用了四种字体。标题、口号和讲者几乎一样大，档与档没有隔开。",
            "时间「星期六 14:00」和课室「会堂 L2」用了最细的字重，比赞助商的一行小字还轻。底部另有三行挤在一起的说明，行距几乎没有。海报上并没有一段需要这样排的正文。"
          ],
          "zhHant": [
            "這張海報用了四種字體。標題、口號和講者幾乎一樣大，檔與檔沒有隔開。",
            "時間「星期六 14:00」和課室「會堂 L2」用了最細的字重，比贊助商的一行小字還輕。底部另有三行擠在一起的說明，行距幾乎沒有。海報上並沒有一段需要這樣排的正文。"
          ],
          "en": [
            "The poster uses four typefaces. The title, the slogan, and the speaker are almost the same size, so the steps are not separated.",
            "“Saturday 14:00” and “Hall L2” use the lightest weight, lighter than a small line under the sponsor. Three further lines are packed at the bottom with almost no leading. The poster does not have a paragraph that needs to be set that way."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 90,
            "prompt": {
              "zh": "给这张海报定三档：哪一档给标题，哪一档给时间和课室，哪一档给赞助商。说明为什么时间不能在最轻的一档。",
              "zhHant": "給這張海報定三檔：哪一檔給標題，哪一檔給時間和課室，哪一檔給贊助商。說明為什麼時間不能在最輕的一檔。",
              "en": "Set three steps for this poster: which step is the title, which is the time and the room, and which is the sponsor. Say why the time cannot be on the lightest step."
            }
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "底部三行说明的问题在哪？",
              "zhHant": "底部三行說明的問題在哪？",
              "en": "What is wrong with the three lines at the bottom?"
            },
            "options": [
              {
                "zh": "三行说明应该再换一种新字体。",
                "zhHant": "三行說明應該再換一種新字體。",
                "en": "The three lines should switch to yet another typeface."
              },
              {
                "zh": "行距几乎没有，它们挤在一起，既不像正文，也不像可以错过的注解。",
                "zhHant": "行距幾乎沒有，它們擠在一起，既不像正文，也不像可以錯過的註解。",
                "en": "There is almost no leading. They are packed together, so they are neither body text nor a note a person can miss."
              },
              {
                "zh": "说明应该比标题更大。",
                "zhHant": "說明應該比標題更大。",
                "en": "The note should be larger than the title."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "四种差不多大的字体造成什么？",
              "zhHant": "四種差不多大的字體造成什麼？",
              "en": "What do four typefaces of nearly the same size do?"
            },
            "options": [
              {
                "zh": "阶梯消失，第一眼又变成平均。",
                "zhHant": "階梯消失，第一眼又變成平均。",
                "en": "The scale disappears, and the first glance becomes an average again."
              },
              {
                "zh": "对比会因此自动达到 4.5 比 1。",
                "zhHant": "對比會因此自動達到 4.5 比 1。",
                "en": "Contrast then automatically reaches 4.5 to 1."
              },
              {
                "zh": "网格会因此对齐。",
                "zhHant": "網格會因此對齊。",
                "en": "The grid then aligns itself."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "对比要达得到，颜色也不能单独说话",
          "zhHant": "對比要達得到，顏色也不能單獨說話",
          "en": "Contrast has to be reached, and color cannot speak alone"
        },
        "concept": {
          "zh": [
            "正文大小的文字，和背后的颜色，通常要达到大约 4.5 比 1，才算读得清。明显更大的标题可以稍低，大约 3 比 1。时间和课室如果是小字，就按正文的标准，不按大标题的标准。",
            "浅灰放在米黄上，常常两边都浅，比数不够。这不是留白。留白是空出来的距离。把事实做成读不清，是把事实藏起来。",
            "颜色不能单独传递一个必须知道的差别。如果某一项是决定要用的，它还得在大小或字重上不同，并且文字本身把事实写出来。只把一项改成另一种颜色，它仍然可能在阶梯上是最轻的。"
          ],
          "zhHant": [
            "正文大小的文字，和背後的顏色，通常要達到大約 4.5 比 1，才算讀得清。明顯更大的標題可以稍低，大約 3 比 1。時間和課室如果是小字，就按正文的標準，不按大標題的標準。",
            "淺灰放在米黃上，常常兩邊都淺，比數不夠。這不是留白。留白是空出來的距離。把事實做成讀不清，是把事實藏起來。",
            "顏色不能單獨傳遞一個必須知道的差別。如果某一項是決定要用的，它還得在大小或字重上不同，並且文字本身把事實寫出來。只把一項改成另一種顏色，它仍然可能在階梯上是最輕的。"
          ],
          "en": [
            "Body-sized text against its background usually needs about 4.5 to 1 before it counts as readable. A clearly larger title can sit a little lower, about 3 to 1. If the time and the room are small type, they take the body standard, not the large-title standard.",
            "Light gray on cream is often light against light, so the ratio is not met. That is not whitespace. Whitespace is distance you leave empty. Making a fact hard to read hides the fact.",
            "Color cannot be the only carrier of a difference someone must know. If an item is needed for the decision, it also has to differ in size or weight, and the words themselves have to state the fact. Changing an item’s color alone can still leave it on the lightest step of the scale."
          ]
        },
        "case": {
          "zh": [
            "时间和课室是浅灰，底是米黄。设计者说这是克制。赞助商标志是饱和的橙色，非常醒目。",
            "没有任何其他文字再写一次星期六和课室。颜色一弱，决定要用的事实就没了。橙色很响，但它响的不是那个决定。"
          ],
          "zhHant": [
            "時間和課室是淺灰，底是米黃。設計者說這是剋制。贊助商標誌是飽和的橙色，非常醒目。",
            "沒有任何其他文字再寫一次星期六和課室。顏色一弱，決定要用的事實就沒了。橙色很響，但它響的不是那個決定。"
          ],
          "en": [
            "The time and the room are light gray on a cream ground. The designer calls it restraint. The sponsor’s logo is a saturated orange and very loud.",
            "No other text states Saturday and the room again. Once the color is weak, the fact the decision needs is gone. The orange is loud, and what it makes loud is not the decision."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "浅灰的时间放在米黄上，问题是什么？",
              "zhHant": "淺灰的時間放在米黃上，問題是什麼？",
              "en": "What is wrong with a light-gray time on cream?"
            },
            "options": [
              {
                "zh": "橙色不够多。",
                "zhHant": "橙色不夠多。",
                "en": "There is not enough orange."
              },
              {
                "zh": "小字的对比很可能达不到大约 4.5 比 1，决定要用的事实读不清。",
                "zhHant": "小字的對比很可能達不到大約 4.5 比 1，決定要用的事實讀不清。",
                "en": "Small type at that contrast likely misses about 4.5 to 1, so the fact the decision needs cannot be read."
              },
              {
                "zh": "米黄不能用在海报上。",
                "zhHant": "米黃不能用在海報上。",
                "en": "Cream cannot be used on a poster."
              }
            ]
          },
          {
            "kind": "write",
            "min": 80,
            "prompt": {
              "zh": "时间仍然可以安静一点。写出你怎样让它安静，但对比仍然达得到，并且不靠颜色单独存在。",
              "zhHant": "時間仍然可以安靜一點。寫出你怎樣讓它安靜，但對比仍然達得到，並且不靠顏色單獨存在。",
              "en": "The time can still be quiet. Write how you keep it quiet, still reach the contrast, and do not let color carry it alone."
            }
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "为什么不能只靠把时间改成橙色？",
              "zhHant": "為什麼不能只靠把時間改成橙色？",
              "en": "Why is it not enough to turn the time orange?"
            },
            "options": [
              {
                "zh": "颜色不能是唯一信号。它还要在阶梯上站得住，文字本身也要写清星期六和课室。",
                "zhHant": "顏色不能是唯一信號。它還要在階梯上站得住，文字本身也要寫清星期六和課室。",
                "en": "Color cannot be the only signal. It still has to hold a step on the scale, and the words themselves have to state Saturday and the room."
              },
              {
                "zh": "橙色的对比一定不够。",
                "zhHant": "橙色的對比一定不夠。",
                "en": "Orange contrast is always insufficient."
              },
              {
                "zh": "时间不该使用任何颜色。",
                "zhHant": "時間不該使用任何顏色。",
                "en": "The time should not use any color."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "批评要叫得出接近和对齐",
          "zhHant": "批評要叫得出接近和對齊",
          "en": "A critique can name proximity and alignment"
        },
        "concept": {
          "zh": [
            "网格是看不见的列和边距。对齐是让相关的边落在同一条线上。一张海报以一条主对齐为准。全部居中时，多行事实没有一条可以跟随的边。",
            "接近是分组里很强的一条：靠得近的被看成一组，离得远的被看成另一组。同一个决定的事实要彼此接近，并且接近那个决定的标题。无关的标志离这一组远一点，否则它会被看成决定的一部分。",
            "批评要叫出你看见的那一项：层级、对比、对齐或接近。「我喜欢这个橙色」没有指出版面哪里失败。一次批评只先改最影响决定的那一处，而不是把所有间距同时改掉。"
          ],
          "zhHant": [
            "網格是看不見的列和邊距。對齊是讓相關的邊落在同一條線上。一張海報以一條主對齊為準。全部居中時，多行事實沒有一條可以跟隨的邊。",
            "接近是分組裡很強的一條：靠得近的被看成一組，離得遠的被看成另一組。同一個決定的事實要彼此接近，並且接近那個決定的標題。無關的標誌離這一組遠一點，否則它會被看成決定的一部分。",
            "批評要叫出你看見的那一項：層級、對比、對齊或接近。「我喜歡這個橙色」沒有指出版面哪裡失敗。一次批評只先改最影響決定的那一處，而不是把所有間距同時改掉。"
          ],
          "en": [
            "A grid is the columns and margins you do not see. Alignment puts related edges on one line. A poster keeps one main alignment. When everything is centered, several lines of fact have no edge to follow.",
            "Proximity is a strong grouping rule: what sits close is read as one group, and what sits far apart is read as another. Facts that belong to one decision sit near each other, and near the title of that decision. An unrelated logo sits farther off, or it is read as part of the decision.",
            "A critique names the thing you actually see: hierarchy, contrast, alignment, or proximity. “I like the orange” does not say where the layout fails. One critique changes the place that most affects the decision first. It does not move every gap at once."
          ]
        },
        "case": {
          "zh": [
            "时间在左下，课室在右上，中间隔着口号。两边都不在标题的对齐线上。赞助商标志紧贴着标题，近到会被看成标题的一部分。",
            "设计课的评语写着：「橙色很好看，再调调。」评语没有说哪一组被拆开，也没有说先改哪一条边。"
          ],
          "zhHant": [
            "時間在左下，課室在右上，中間隔著口號。兩邊都不在標題的對齊線上。贊助商標誌緊貼著標題，近到會被看成標題的一部分。",
            "設計課的評語寫著：「橙色很好看，再調調。」評語沒有說哪一組被拆開，也沒有說先改哪一條邊。"
          ],
          "en": [
            "The time is at the lower left and the room is at the upper right, with the slogan between them. Neither sits on the title’s alignment. The sponsor’s logo is tight against the title, close enough to be read as part of the title.",
            "The critique in class says: “The orange is nice, adjust it a bit.” It does not say which group was split, and it does not say which edge to move first."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 110,
            "prompt": {
              "zh": "写一条批评：点出接近上哪两样被拆开了，对齐上缺了什么，以及你只先改哪一处。不要写「好看」。",
              "zhHant": "寫一條批評：點出接近上哪兩樣被拆開了，對齊上缺了什麼，以及你只先改哪一處。不要寫「好看」。",
              "en": "Write one critique: which two facts proximity has split, what the alignment is missing, and the one place you would move first. Do not write “nice.”"
            }
          },
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "时间和课室分在两个角，首先破坏的是什么？",
              "zhHant": "時間和課室分在兩個角，首先破壞的是什麼？",
              "en": "Time and room in opposite corners break what first?"
            },
            "options": [
              {
                "zh": "对比度的 4.5 比 1。",
                "zhHant": "對比度的 4.5 比 1。",
                "en": "The 4.5 to 1 contrast ratio."
              },
              {
                "zh": "字体的授权。",
                "zhHant": "字體的授權。",
                "en": "The license of the typeface."
              },
              {
                "zh": "接近：同一个决定的两件事实没有被看成一组。",
                "zhHant": "接近：同一個決定的兩件事實沒有被看成一組。",
                "en": "Proximity: two facts of one decision are not read as one group."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "哪一条评语算批评？",
              "zhHant": "哪一條評語算批評？",
              "en": "Which comment counts as a critique?"
            },
            "options": [
              {
                "zh": "橙色很好看，再调调。",
                "zhHant": "橙色很好看，再調調。",
                "en": "The orange is nice. Adjust it a bit."
              },
              {
                "zh": "时间和课室被口号拆开，又不在标题的对齐线上。先把这两件事实挪到标题下面，作为一组。",
                "zhHant": "時間和課室被口號拆開，又不在標題的對齊線上。先把這兩件事實挪到標題下面，作為一組。",
                "en": "The slogan splits the time from the room, and neither sits on the title’s alignment. First move those two facts under the title, as one group."
              },
              {
                "zh": "我喜欢原来的，但也喜欢改后的。",
                "zhHant": "我喜歡原來的，但也喜歡改後的。",
                "en": "I like the original, and I also like the changed one."
              }
            ]
          }
        ]
      }
    ]
  },
  "anquan": {
    "title": {
      "zh": "用机密性、身份和最小权限判断一次失误",
      "zhHant": "用機密性、身份和最小權限判斷一次失誤",
      "en": "Judge a failure with confidentiality, identity, and least privilege"
    },
    "minutes": 45,
    "lessons": [
      {
        "title": {
          "zh": "先说清你在保护哪一项",
          "zhHant": "先說清你在保護哪一項",
          "en": "Name which property you are protecting"
        },
        "concept": {
          "zh": [
            "安全事故先分类，再选办法。机密性：不该看的人看到了。完整性：不该改的人改了，或改完没有留下是谁。可用性：该用的时候用不了。三项会互相拉扯。多一道检查可能让页面在人最多的时候登不上，那就是用可用性去换机密性。你要说清这次保的是哪一项。",
            "不是每一件麻烦都是同一种。电话被不该看的人拿走，是机密性。地点被没有权限的人改掉，是完整性。人最多的那天页面打不开，是可用性。用「加强安全」一句话盖过去，会选错办法。",
            "办法要对着那一项。机密性靠限制谁能读取。完整性靠限制谁能修改，并留下是谁改的。可用性靠在需要用的时候仍然用得了，而不是把所有人锁在外面就算完成。"
          ],
          "zhHant": [
            "安全事故先分類，再選辦法。機密性：不該看的人看到了。完整性：不該改的人改了，或改完沒有留下是誰。可用性：該用的時候用不了。三項會互相拉扯。多一道檢查可能讓頁面在人最多的時候登不上，那就是用可用性去換機密性。你要說清這次保的是哪一項。",
            "不是每一件麻煩都是同一種。電話被不該看的人拿走，是機密性。地點被沒有權限的人改掉，是完整性。人最多的那天頁面打不開，是可用性。用「加強安全」一句話蓋過去，會選錯辦法。",
            "辦法要對著那一項。機密性靠限制誰能讀取。完整性靠限制誰能修改，並留下是誰改的。可用性靠在需要用的時候仍然用得了，而不是把所有人鎖在外面就算完成。"
          ],
          "en": [
            "Classify a security failure before you pick a fix. Confidentiality: someone who should not see it saw it. Integrity: someone who should not change it changed it, or the change does not record who. Availability: it cannot be used when it needs to be used. The three pull against each other. An extra check can lock the page on the day the most people need it. That spends availability to buy confidentiality. Say which one this incident is protecting.",
            "Not every trouble is the same kind. A phone number taken by someone who should not have it is confidentiality. A place changed by someone without permission is integrity. A page that will not open on the busiest day is availability. Covering all three with “make it more secure” picks the wrong fix.",
            "The fix has to face that property. Confidentiality limits who can read. Integrity limits who can change, and keeps who changed it. Availability means it still works at the moment it is needed. Locking everyone out is not the same as finishing the job."
          ]
        },
        "case": {
          "zh": [
            "宿舍失物页这个月出了三件事。一名义工把全部联系电话导出并转发。有人把一条失物的地点改成了另一个楼层，办公处没有记录是谁改的。搬宿那天上午，页面完全打不开，人在柜台排队。",
            "下午有人提议：把所有人锁在登录外，直到晚上再开放。这能减少不该看的访问，但排队的人当天仍然用不了这页。"
          ],
          "zhHant": [
            "宿舍失物頁這個月出了三件事。一名義工把全部聯繫電話導出並轉發。有人把一條失物的地點改成了另一個樓層，辦公處沒有記錄是誰改的。搬宿那天上午，頁面完全打不開，人在櫃檯排隊。",
            "下午有人提議：把所有人鎖在登入外，直到晚上再開放。這能減少不該看的訪問，但排隊的人當天仍然用不了這頁。"
          ],
          "en": [
            "The lost-and-found had three incidents this month. A volunteer exported every phone number and forwarded the file. Someone changed a found item’s floor, and the office has no record of who. On the morning of move-out the page would not open at all, and people were queued at the counter.",
            "In the afternoon someone proposes locking everyone out of the page until evening. That can reduce reads that should not happen. The people in the queue still cannot use the page that day."
          ]
        },
        "tasks": [
          {
            "kind": "write",
            "min": 100,
            "prompt": {
              "zh": "把这三件事分别归到机密性、完整性、可用性，并各用一句话说明你为什么这样归。",
              "zhHant": "把這三件事分別歸到機密性、完整性、可用性，並各用一句話說明你為什麼這樣歸。",
              "en": "Classify the three incidents as confidentiality, integrity, or availability, and give one sentence each on why."
            }
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "搬宿当天把所有人锁在登录外，直到下午才恢复。你保住了什么，损了什么？",
              "zhHant": "搬宿當天把所有人鎖在登入外，直到下午才恢復。你保住了什麼，損了什麼？",
              "en": "On move-out day everyone is locked out until afternoon. What did you keep, and what did you spend?"
            },
            "options": [
              {
                "zh": "你可能减少了不该看的访问，但损的是可用性：排队的人当天用不了这页。",
                "zhHant": "你可能減少了不該看的訪問，但損的是可用性：排隊的人當天用不了這頁。",
                "en": "You may have reduced reads that should not happen, and you spent availability: the queue could not use the page that day."
              },
              {
                "zh": "你同时修好了完整性和可用性。",
                "zhHant": "你同時修好了完整性和可用性。",
                "en": "You repaired integrity and availability at the same time."
              },
              {
                "zh": "你没有影响任何一项，因为页面终于安全了。",
                "zhHant": "你沒有影響任何一項，因為頁面終於安全了。",
                "en": "You affected none of them, because the page was finally secure."
              }
            ]
          },
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "地点被改，又查不到是谁。这首先是哪一项？",
              "zhHant": "地點被改，又查不到是誰。這首先是哪一項？",
              "en": "A place was changed, and nobody can tell who. Which property is that first?"
            },
            "options": [
              {
                "zh": "可用性，因为页面还开着。",
                "zhHant": "可用性，因為頁面還開著。",
                "en": "Availability, because the page is still up."
              },
              {
                "zh": "完整性，因为记录被不该改的方式改了，而且没有留下是谁。",
                "zhHant": "完整性，因為記錄被不該改的方式改了，而且沒有留下是誰。",
                "en": "Integrity, because the record was changed in a way it should not have been, and who did it was not kept."
              },
              {
                "zh": "机密性，因为地点本来就可以公开。",
                "zhHant": "機密性，因為地點本來就可以公開。",
                "en": "Confidentiality, because the place was allowed to be public anyway."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "认证、授权，和口令怎么放",
          "zhHant": "認證、授權，和口令怎麼放",
          "en": "Authentication, authorization, and where a password lives"
        },
        "concept": {
          "zh": [
            "认证回答「你是谁」。授权回答「你被允许做什么」。登录成功只完成认证。一名已经登录的义工，并不因此被授权导出全部电话。授权要在服务器上对每一次敏感动作再查一次。只把按钮藏起来，请求仍然发得出去。",
            "口令不能以能还原的方式放着，更不能写在会交给读者的页面上。要存的是加了盐、故意算得慢的散列。看到散列的人不能直接得到口令。很快的普通摘要不适合拿来存口令，因为可以大量猜。",
            "多因素是另一种因素，不是在同一条聊天里再要一次口令。会话在服务器上结束才算登出，只清掉浏览器里的标记不够。401 是还没认证。403 是认证了，但这一项授权没有。"
          ],
          "zhHant": [
            "認證回答「你是誰」。授權回答「你被允許做什麼」。登入成功只完成認證。一名已經登入的義工，並不因此被授權導出全部電話。授權要在服務器上對每一次敏感動作再查一次。只把按鈕藏起來，請求仍然發得出去。",
            "口令不能以能還原的方式放著，更不能寫在會交給讀者的頁面上。要存的是加了鹽、故意算得慢的散列。看到散列的人不能直接得到口令。很快的普通摘要不適合拿來存口令，因為可以大量猜。",
            "多因素是另一種因素，不是在同一條聊天裡再要一次口令。會話在服務器上結束才算登出，只清掉瀏覽器裡的標記不夠。401 是還沒認證。403 是認證了，但這一項授權沒有。"
          ],
          "en": [
            "Authentication answers who you are. Authorization answers what you are allowed to do. A successful sign-in finishes authentication only. A volunteer who is signed in is not thereby authorized to export every phone number. Authorization is checked again on the server for every sensitive action. Hiding the button does not stop the request.",
            "A password is not stored in a form that can be turned back into the password, and it is not written on a page the reader receives. What you store is a salted hash that is slow on purpose. Someone who sees the hash does not get the password. A fast general-purpose digest is a poor way to store one, because it can be guessed in bulk.",
            "A second factor is a different factor, not another password asked in the same chat. A session is signed out when the server ends it. Clearing a mark in the browser is not enough. 401 means not authenticated. 403 means authenticated, and not authorized for this action."
          ]
        },
        "case": {
          "zh": [
            "义工用自己的账号登录。页面把「导出电话」藏了起来。他改了请求地址，服务器没有再查授权，电话表下载了。",
            "办公处的口令存在数据库里，和登录时输入的原文一样。登出只清了这台浏览器里的一个标记。另一台已经打开的电脑仍然处于登录状态。"
          ],
          "zhHant": [
            "義工用自己的賬號登入。頁面把「導出電話」藏了起來。他改了請求地址，服務器沒有再查授權，電話表下載了。",
            "辦公處的口令存在數據庫裡，和登入時輸入的原文一樣。登出只清了這台瀏覽器裡的一個標記。另一台已經打開的電腦仍然處於登入狀態。"
          ],
          "en": [
            "A volunteer signs in with their own account. The page hides “export phone numbers.” They change the request address. The server does not check authorization again, and the phone list downloads.",
            "The office password sits in the database as the same text that was typed at sign-in. Signing out only clears a mark in this browser. Another computer that was already open stays signed in."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "导出电话这次，哪一层失败了？",
              "zhHant": "導出電話這次，哪一層失敗了？",
              "en": "On the export, which layer failed?"
            },
            "options": [
              {
                "zh": "认证：因为义工不应该有账号。",
                "zhHant": "認證：因為義工不應該有賬號。",
                "en": "Authentication: the volunteer should not have had an account."
              },
              {
                "zh": "散列：因为页面把按钮藏起来了。",
                "zhHant": "散列：因為頁面把按鈕藏起來了。",
                "en": "The hash: because the page hid the button."
              },
              {
                "zh": "授权：人已经认证，但服务器没有拒绝他不该做的导出。",
                "zhHant": "授權：人已經認證，但服務器沒有拒絕他不該做的導出。",
                "en": "Authorization: the person was already authenticated, and the server did not refuse an export they should not do."
              }
            ]
          },
          {
            "kind": "write",
            "min": 100,
            "prompt": {
              "zh": "说明口令为什么不能存成原文，以及登出为什么必须发生在服务器上。用这个案例里的两件事。",
              "zhHant": "說明口令為什麼不能存成原文，以及登出為什麼必須發生在服務器上。用這個案例裡的兩件事。",
              "en": "Explain why the password cannot be stored as the original text, and why signing out has to happen on the server. Use both facts from this case."
            }
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "义工已经登录，却不该导出。服务器应该回什么？",
              "zhHant": "義工已經登入，卻不該導出。服務器應該回什麼？",
              "en": "The volunteer is signed in and should not export. What should the server answer?"
            },
            "options": [
              {
                "zh": "403。认证已经完成，缺的是授权。",
                "zhHant": "403。認證已經完成，缺的是授權。",
                "en": "403. Authentication already succeeded. Authorization is what is missing."
              },
              {
                "zh": "401。因为他还没登录。",
                "zhHant": "401。因為他還沒登入。",
                "en": "401, because he is not signed in yet."
              },
              {
                "zh": "200。因为按钮已经藏了，所以没有风险。",
                "zhHant": "200。因為按鈕已經藏了，所以沒有風險。",
                "en": "200, because the button is hidden, so there is no risk."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "验证码证明的是这一刻的渠道",
          "zhHant": "驗證碼證明的是這一刻的渠道",
          "en": "A code proves the channel, at that moment"
        },
        "concept": {
          "zh": [
            "验证码证明的是：这一刻，你拿着那个渠道。谁能读到码，谁就能通过这一次认证。把码读给「听起来像办公处」的人，就是把这个因素交给他。他知道你的名字，并不等于他拿着你的渠道。",
            "真正负责这套系统的人不会要你把码读回去，也不会因为你不读就威胁记录马上消失。催促加上保密，是常见的手法，不是你应该破例的理由。",
            "码从一条渠道来，又在同一条聊天里被要走，就没有第二个因素。另一个因素要在另一条路上，例如你已经拿着的那台设备上的确认，而不是对方让你念出来的六个数字。"
          ],
          "zhHant": [
            "驗證碼證明的是：這一刻，你拿著那個渠道。誰能讀到碼，誰就能通過這一次認證。把碼讀給「聽起來像辦公處」的人，就是把這個因素交給他。他知道你的名字，並不等於他拿著你的渠道。",
            "真正負責這套系統的人不會要你把碼讀回去，也不會因為你不讀就威脅記錄馬上消失。催促加上保密，是常見的手法，不是你應該破例的理由。",
            "碼從一條渠道來，又在同一條聊天裡被要走，就沒有第二個因素。另一個因素要在另一條路上，例如你已經拿著的那台設備上的確認，而不是對方讓你念出來的六個數字。"
          ],
          "en": [
            "A verification code proves one thing: at this moment, you hold that channel. Whoever can read the code can pass this authentication. Reading it to someone who “sounds like the office” hands them the factor. Knowing your name is not the same as holding your channel.",
            "The people who actually run the system will not ask you to read the code back, and they will not threaten that the records vanish if you refuse. Urgency plus secrecy is a common pattern. It is not a reason to make an exception.",
            "A code that arrives on one channel and is then demanded in that same chat is not a second factor. The other factor has to travel a different path, such as a confirmation on a device you already hold, not six digits someone asks you to read aloud."
          ]
        },
        "case": {
          "zh": [
            "在港铁上，有人说他是宿舍办公处，被锁在外面。他让你把刚收到的六位数读给他，否则失物页今天会全部删掉。",
            "他说得出你的名字，也说得出这页叫什么。码是发到你自己的手机上的。他要你在这节车厢里念出来。"
          ],
          "zhHant": [
            "在港鐵上，有人說他是宿舍辦公處，被鎖在外面。他讓你把剛收到的六位數讀給他，否則失物頁今天會全部刪掉。",
            "他說得出你的名字，也說得出這頁叫什麼。碼是發到你自己的手機上的。他要你在這節車廂裡念出來。"
          ],
          "en": [
            "On the MTR, someone says he is the residence office and that he is locked out. He asks you to read him the six digits you just received, or the lost-and-found will all be deleted today.",
            "He can say your name, and he can say what the page is called. The code was sent to your own phone. He wants it read aloud in this carriage."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "这个六位数该怎么处理？",
              "zhHant": "這個六位數該怎麼處理？",
              "en": "What should happen to the six digits?"
            },
            "options": [
              {
                "zh": "读给他。他说了你的名字，也说了页面的名字。",
                "zhHant": "讀給他。他說了你的名字，也說了頁面的名字。",
                "en": "Read them to him. He said your name and the name of the page."
              },
              {
                "zh": "不读。码证明的是你拿着这个渠道。读出去就把这一次认证交给他。",
                "zhHant": "不讀。碼證明的是你拿著這個渠道。讀出去就把這一次認證交給他。",
                "en": "Do not read them. The code proves you hold the channel. Reading it hands him this authentication."
              },
              {
                "zh": "读一半，留下一半。",
                "zhHant": "讀一半，留下一半。",
                "en": "Read half, and keep half."
              }
            ]
          },
          {
            "kind": "write",
            "min": 90,
            "prompt": {
              "zh": "他催你马上读，否则记录会被删。用这一讲的概念说明，为什么催促和保密不能成为例外。",
              "zhHant": "他催你馬上讀，否則記錄會被刪。用這一講的概念說明，為什麼催促和保密不能成為例外。",
              "en": "He rushes you to read it now, or the records will be deleted. Use this lecture’s concept to say why urgency and secrecy are not an exception."
            }
          },
          {
            "kind": "check",
            "answer": 0,
            "prompt": {
              "zh": "为什么在同一条聊天里再要一次口令，不算多因素？",
              "zhHant": "為什麼在同一條聊天裡再要一次口令，不算多因素？",
              "en": "Why is asking for the password again in the same chat not multi-factor?"
            },
            "options": [
              {
                "zh": "因为两次都在对方已经能听的这一条路上，没有第二个因素。",
                "zhHant": "因為兩次都在對方已經能聽的這一條路上，沒有第二個因素。",
                "en": "Because both travel the path the other person can already hear. There is no second factor."
              },
              {
                "zh": "因为口令比验证码更长，所以已经足够。",
                "zhHant": "因為口令比驗證碼更長，所以已經足夠。",
                "en": "Because a password is longer than a code, so it is already enough."
              },
              {
                "zh": "因为他说得出你的名字，认证就已经完成。",
                "zhHant": "因為他說得出你的名字，認證就已經完成。",
                "en": "Because he can say your name, authentication is already finished."
              }
            ]
          }
        ]
      },
      {
        "title": {
          "zh": "秘密、脚本，和最小权限",
          "zhHant": "祕密、腳本，和最小權限",
          "en": "Secrets, scripts, and least privilege"
        },
        "concept": {
          "zh": [
            "写在 HTML 注释里的口令会随着页面送到浏览器。查看源代码的人看得到。在你删掉注释之前，它已经算交出去的了。秘密放在运行时才能取到的地方，不放进会交给读者的文档。",
            "失物描述如果按 HTML 插入，下一位读者的浏览器就会执行里面的脚本。描述作为文字插入，脚本就只是字。这一项和「浏览器里的检查不是记录」是同一条边界：读者收到的是文字，不是别人的程序。",
            "最小权限是：一个人只拿到做这件事所必需的能力。义工可以新增一条失物。导出全部电话是另一件能力，留给办公处的账号。共用一个管理员口令时，你既给多了能力，也无法在事后说是谁做的。那同时伤到机密性和完整性。"
          ],
          "zhHant": [
            "寫在 HTML 註釋裡的口令會隨著頁面送到瀏覽器。查看源代碼的人看得到。在你刪掉註釋之前，它已經算交出去的了。祕密放在運行時才能取到的地方，不放進會交給讀者的文檔。",
            "失物描述如果按 HTML 插入，下一位讀者的瀏覽器就會執行裡面的腳本。描述作為文字插入，腳本就只是字。這一項和「瀏覽器裡的檢查不是記錄」是同一條邊界：讀者收到的是文字，不是別人的程序。",
            "最小權限是：一個人只拿到做這件事所必需的能力。義工可以新增一條失物。導出全部電話是另一件能力，留給辦公處的賬號。共用一個管理員口令時，你既給多了能力，也無法在事後說是誰做的。那同時傷到機密性和完整性。"
          ],
          "en": [
            "A password in an HTML comment is delivered to the browser with the page. Anyone who views the source can read it. Before you delete the comment, it has already been handed out. A secret lives where the running system can fetch it. It does not live in a document the reader receives.",
            "If a found-item description is inserted as HTML, the next reader’s browser runs a script inside it. Inserted as text, the script is only characters. This is the same boundary as “a check in the browser is not the record”: the reader receives text, not someone else’s program.",
            "Least privilege means a person receives only the capability this job needs. A volunteer can add one found item. Exporting every phone number is a different capability, and it stays with the office account. One shared administrator password both grants too much and leaves you unable to say who did it afterward. That hits confidentiality and integrity together."
          ]
        },
        "case": {
          "zh": [
            "学生把办公处口令写在页面注释里，说是方便组员查找。失物描述被按 HTML 插入，一条描述里的脚本在别人的浏览器里跑了。",
            "所有义工共用同一个管理员登录来发布失物，也用它导出电话。事后办公处无法说出是哪一名义工导出的。"
          ],
          "zhHant": [
            "學生把辦公處口令寫在頁面註釋裡，說是方便組員查找。失物描述被按 HTML 插入，一條描述裡的腳本在別人的瀏覽器裡跑了。",
            "所有義工共用同一個管理員登入來發布失物，也用它導出電話。事後辦公處無法說出是哪一名義工導出的。"
          ],
          "en": [
            "A student puts the office password in a page comment, “so the team can find it.” Descriptions are inserted as HTML, and a script in one description runs in someone else’s browser.",
            "Every volunteer shares one administrator sign-in to post a found item, and the same sign-in exports the phone numbers. Afterward the office cannot say which volunteer exported them."
          ]
        },
        "tasks": [
          {
            "kind": "check",
            "answer": 1,
            "prompt": {
              "zh": "注释里的口令为什么已经不算秘密？",
              "zhHant": "註釋裡的口令為什麼已經不算祕密？",
              "en": "Why is a password in a comment no longer a secret?"
            },
            "options": [
              {
                "zh": "因为注释只有组员看得到。",
                "zhHant": "因為註釋只有組員看得到。",
                "en": "Because only teammates can see a comment."
              },
              {
                "zh": "因为注释在页面里，浏览器会收到，查看源代码就能看见。",
                "zhHant": "因為註釋在頁面裡，瀏覽器會收到，查看源代碼就能看見。",
                "en": "Because the comment is in the page, the browser receives it, and view-source shows it."
              },
              {
                "zh": "因为口令只要够长，就可以放在注释里。",
                "zhHant": "因為口令只要夠長，就可以放在註釋裡。",
                "en": "Because a long enough password is safe in a comment."
              }
            ]
          },
          {
            "kind": "write",
            "min": 120,
            "prompt": {
              "zh": "给义工和办公处各写一件被允许的事和一件被拒绝的事，并说明为什么不能共用一个管理员口令。要写到事后无法知道是谁。",
              "zhHant": "給義工和辦公處各寫一件被允許的事和一件被拒絕的事，並說明為什麼不能共用一個管理員口令。要寫到事後無法知道是誰。",
              "en": "For the volunteer and for the office, write one action each is allowed and one each is refused. Then say why they cannot share one administrator password. Include that afterward nobody can tell who did it."
            }
          },
          {
            "kind": "check",
            "answer": 2,
            "prompt": {
              "zh": "描述按 HTML 插入时，风险在谁身上？",
              "zhHant": "描述按 HTML 插入時，風險在誰身上？",
              "en": "When a description is inserted as HTML, who carries the risk?"
            },
            "options": [
              {
                "zh": "只在写描述的人身上，因为他的电脑会变慢。",
                "zhHant": "只在寫描述的人身上，因為他的電腦會變慢。",
                "en": "Only the person who wrote it, because their computer gets slower."
              },
              {
                "zh": "只在服务器的磁盘上，读者不受影响。",
                "zhHant": "只在服務器的磁盤上，讀者不受影響。",
                "en": "Only on the server’s disk. The reader is unaffected."
              },
              {
                "zh": "在下一位打开列表的人身上。他的浏览器会执行那段脚本。",
                "zhHant": "在下一位打開列表的人身上。他的瀏覽器會執行那段腳本。",
                "en": "On the next person who opens the list. Their browser runs the script."
              }
            ]
          }
        ]
      }
    ]
  }
};
