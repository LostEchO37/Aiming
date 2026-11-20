/* Each universe is several courses. A lesson is a concept, one case, then questions. A certificate waits until every course in the universe is done. */
window.AIMING_SKILLS = {
  "yingxiao": {
    "courses": [
      {
        "id": "campaign",
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
      {
        "id": "price",
        "title": {
          "zh": "定价：成本、替代方案和一道篱笆",
          "zhHant": "定價：成本、替代方案和一道籬笆",
          "en": "Price from cost, the alternative, and a fence"
        },
        "minutes": 45,
        "lessons": [
          {
            "title": {
              "zh": "三个参照，不是一个折扣",
              "zhHant": "三個參照，不是一個折扣",
              "en": "Three references, not a discount"
            },
            "concept": {
              "zh": [
                "价格是一个决定，不是临走时让一步。给数字之前先摆三个参照。成本是地板：卖得比它低，你是在付钱请人买。竞争者的价格是背景，不是你必须贴上去的目标。价值来自购买者正在用的替代方案：他不买你，会多花多少时间、多少风险、多少来回。",
                "只做成本加成，会看不见替代方案里的损失。只贴着竞争者减价，会把你自己的差别一起减掉。价值定价不是把数字喊高，而是先说清购买者保住了什么，再决定你留下多少、他留下多少。",
                "三个参照要写在同一张纸上。缺了地板，你不知道这笔能不能做。缺了替代方案，数字只是一个习惯。"
              ],
              "zhHant": [
                "價格是一個決定，不是臨走時讓一步。給數字之前先擺三個參照。成本是地板：賣得比它低，你是在付錢請人買。競爭者的價格是背景，不是你必須貼上去的目標。價值來自購買者正在用的替代方案：他不買你，會多花多少時間、多少風險、多少來回。",
                "只做成本加成，會看不見替代方案裡的損失。只貼著競爭者減價，會把你自己的差別一起減掉。價值定價不是把數字喊高，而是先說清購買者保住了什麼，再決定你留下多少、他留下多少。",
                "三個參照要寫在同一張紙上。缺了地板，你不知道這筆能不能做。缺了替代方案，數字只是一個習慣。"
              ],
              "en": [
                "A price is a decision, not a concession on the way out. Before the number, set three references. Cost is the floor: below it, you pay people to buy. A competitor’s price is context, not a target you must match. Value comes from the alternative the buyer already uses: the time, the risk, and the extra trips they keep if they do not buy you.",
                "Cost-plus alone cannot see the loss inside the alternative. Matching a competitor and then cutting erases your own difference along with the price. Value-based pricing is not a louder number. It names what the buyer keeps, then decides how much of that you keep and how much they keep.",
                "The three references belong on one page. Without the floor, you do not know whether the job can be done. Without the alternative, the number is only a habit."
              ]
            },
            "case": {
              "zh": [
                "海图给船厂供零件。一个零件的成本是港币八十元。附近现金店卖类似件一百元，但不保证下午能到，也不核对零件号。船厂的替代方案是派人星期六去现金店，常常买错号，星期一再跑一趟。海图现在用成本加百分之十五，卖九十二元，还主动说可以再减。",
                "九十二元低于现金店，也远低于一次跑错零件的工时。减价没有对着替代方案，只是在地板附近把差别送掉。"
              ],
              "zhHant": [
                "海圖給船廠供零件。一個零件的成本是港幣八十元。附近現金店賣類似件一百元，但不保證下午能到，也不核對零件號。船廠的替代方案是派人星期六去現金店，常常買錯號，星期一再跑一趟。海圖現在用成本加百分之十五，賣九十二元，還主動說可以再減。",
                "九十二元低於現金店，也遠低於一次跑錯零件的工時。減價沒有對著替代方案，只是在地板附近把差別送掉。"
              ],
              "en": [
                "Haithu supplies parts to boat yards. A part costs HK$80. A nearby cash shop sells a similar part for HK$100, without promising it that afternoon and without checking the part number. The yard’s alternative is sending someone on Saturday, often buying the wrong number, and going again on Monday. Haithu prices at cost plus fifteen percent, HK$92, and offers to cut further.",
                "Ninety-two dollars is already below the cash shop, and far below the labor of a wrong part. The cut does not face the alternative. It gives away the difference near the floor."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 100,
                "prompt": {
                  "zh": "用成本地板和船厂的替代方案，说明九十二元再减为什么不是定价。替代方案要写到跑错零件号。",
                  "zhHant": "用成本地板和船廠的替代方案，說明九十二元再減為什麼不是定價。替代方案要寫到跑錯零件號。",
                  "en": "Using the cost floor and the yard’s alternative, explain why cutting below HK$92 is not a price. The alternative has to include buying the wrong part number."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "哪一个数字才用上了替代方案，而不只是成本加成？",
                  "zhHant": "哪一個數字才用上了替代方案，而不只是成本加成？",
                  "en": "Which number actually uses the alternative, not only cost-plus?"
                },
                "options": [
                  {
                    "zh": "成本八十元加百分之十五，再减到比现金店更低。",
                    "zhHant": "成本八十元加百分之十五，再減到比現金店更低。",
                    "en": "Cost of HK$80 plus fifteen percent, then cut until it is lower than the cash shop."
                  },
                  {
                    "zh": "价格对着星期六白跑和买错零件号的损失，同时仍留在八十元的地板之上。",
                    "zhHant": "價格對著星期六白跑和買錯零件號的損失，同時仍留在八十元的地板之上。",
                    "en": "The price faces the lost Saturday and the wrong part number, and it still stays above the HK$80 floor."
                  },
                  {
                    "zh": "跟现金店一样卖一百元，因为竞争者就是目标。",
                    "zhHant": "跟現金店一樣賣一百元，因為競爭者就是目標。",
                    "en": "Charge HK$100 like the cash shop, because the competitor is the target."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "竞争者的一百元在这里是什么？",
                  "zhHant": "競爭者的一百元在這裡是什麼？",
                  "en": "What is the competitor’s HK$100 here?"
                },
                "options": [
                  {
                    "zh": "背景。它不是你必须贴上的目标，因为对方不核对零件号，也不保证下午到。",
                    "zhHant": "背景。它不是你必須貼上的目標，因為對方不核對零件號，也不保證下午到。",
                    "en": "Context. It is not a target you must match, because they do not check the part number and do not promise the afternoon."
                  },
                  {
                    "zh": "地板。低于一百元就不能卖。",
                    "zhHant": "地板。低於一百元就不能賣。",
                    "en": "The floor. You cannot sell below HK$100."
                  },
                  {
                    "zh": "价值本身。购买者保住的就是这一百元。",
                    "zhHant": "價值本身。購買者保住的就是這一百元。",
                    "en": "The value itself. What the buyer keeps is that HK$100."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "篱笆决定谁拿哪一个价",
              "zhHant": "籬笆決定誰拿哪一個價",
              "en": "A fence decides who gets which price"
            },
            "concept": {
              "zh": [
                "不同的人可以付不同的价，但规则必须看得见、对得上。这道规则叫篱笆：谁因为一个可核对的条件，拿到哪一档。条件可以是数量、期限、是否自己提货。不能是销售当天的心情。",
                "篱笆要和你的成本或价值连在一起。买得多、承诺得久、让你少跑一趟的人，可以少付，因为他们改变了你的成本。只是叫得响的人少付，篱笆就不存在，套利就出现了：本该付高价的人走了低价那道口。",
                "每一档还要故意不包含一件事。什么都包含的低价，会把高价的人吸走。"
              ],
              "zhHant": [
                "不同的人可以付不同的價，但規則必須看得見、對得上。這道規則叫籬笆：誰因為一個可核對的條件，拿到哪一檔。條件可以是數量、期限、是否自己提貨。不能是銷售當天的心情。",
                "籬笆要和你的成本或價值連在一起。買得多、承諾得久、讓你少跑一趟的人，可以少付，因為他們改變了你的成本。只是叫得響的人少付，籬笆就不存在，套利就出現了：本該付高價的人走了低價那道口。",
                "每一檔還要故意不包含一件事。什麼都包含的低價，會把高價的人吸走。"
              ],
              "en": [
                "Different people can pay different prices, but the rule has to be visible and checkable. That rule is a fence: who gets which tier because of a condition someone can verify. The condition can be quantity, term, or picking up the part themselves. It cannot be the salesperson’s mood that day.",
                "The fence has to connect to your cost or to the value. Someone who buys more, commits longer, or saves you a trip can pay less, because they changed your cost. Someone who only asks loudly is not a fence. Arbitrage then appears: the person who should pay the high price walks through the low-price gate.",
                "Each tier also deliberately excludes something. A low price that includes everything pulls the high-price buyer away."
              ]
            },
            "case": {
              "zh": [
                "海图想给熟客九折。熟客的定义是老板认识的人。船厂很快都变成了熟客。另一档本该是：一次订齐一个维修单上的全部零件号，并且自己来仓取，就免掉送货。临时要当天送到码头的，不进这一档。",
                "认识老板对不上任何成本。订齐并自取对得上：少一次送错、少跑一趟。"
              ],
              "zhHant": [
                "海圖想給熟客九折。熟客的定義是老闆認識的人。船廠很快都變成了熟客。另一檔本該是：一次訂齊一個維修單上的全部零件號，並且自己來倉取，就免掉送貨。臨時要當天送到碼頭的，不進這一檔。",
                "認識老闆對不上任何成本。訂齊並自取對得上：少一次送錯、少跑一趟。"
              ],
              "en": [
                "Haithu wants a ten percent cut for regulars. A regular is someone the owner knows. Every yard soon becomes a regular. The other tier was supposed to be: order every part number on one repair list and pick them up, and the delivery fee is waived. A same-day delivery to the pier does not enter that tier.",
                "Knowing the owner matches no cost. Ordering the whole list and picking it up does: one less wrong delivery, one less trip."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "哪一道才是篱笆？",
                  "zhHant": "哪一道才是籬笆？",
                  "en": "Which one is a fence?"
                },
                "options": [
                  {
                    "zh": "老板认识的人都九折。",
                    "zhHant": "老闆認識的人都九折。",
                    "en": "Anyone the owner knows gets ten percent off."
                  },
                  {
                    "zh": "谁当天叫得响，谁就减。",
                    "zhHant": "誰當天叫得響，誰就減。",
                    "en": "Whoever asks loudly that day gets the cut."
                  },
                  {
                    "zh": "一次订齐维修单上的全部零件号并自取，才免送货。当天送到码头的不在此列。",
                    "zhHant": "一次訂齊維修單上的全部零件號並自取，才免送貨。當天送到碼頭的不在此列。",
                    "en": "Order every part number on the repair list and pick them up, and the delivery fee is waived. Same-day delivery to the pier is not in this tier."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "说明为什么「认识老板」这道口会造成套利。用上海图本来该付送货费的那一类船厂。",
                  "zhHant": "說明為什麼「認識老闆」這道口會造成套利。用上海圖本來該付送貨費的那一類船廠。",
                  "en": "Explain why the “the owner knows you” gate creates arbitrage. Use the yards that should still have paid for delivery."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "低价那一档为什么必须故意少一件东西？",
                  "zhHant": "低價那一檔為什麼必須故意少一件東西？",
                  "en": "Why must the low tier deliberately leave something out?"
                },
                "options": [
                  {
                    "zh": "否则本该付高价的人会全部走进低价，高价那档就不存在了。",
                    "zhHant": "否則本該付高價的人會全部走進低價，高價那檔就不存在了。",
                    "en": "Otherwise everyone who should pay the high price walks into the low tier, and the high tier ceases to exist."
                  },
                  {
                    "zh": "因为低价不应该真的能买到零件。",
                    "zhHant": "因為低價不應該真的能買到零件。",
                    "en": "Because the low price should not actually be able to buy a part."
                  },
                  {
                    "zh": "因为篱笆只是一句广告，不必执行。",
                    "zhHant": "因為籬笆只是一句廣告，不必執行。",
                    "en": "Because a fence is only a slogan and does not have to be enforced."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "折扣要换回一件事",
              "zhHant": "折扣要換回一件事",
              "en": "A discount comes back with something"
            },
            "concept": {
              "zh": [
                "折扣从差价里直接拿走。没有换回来的那一件事，它就只是让步。换回来的可以是更长的承诺、更少的送货、或一次把零件号核对完。没有换回，下一次购买会被训练成继续要折扣。",
                "先写地板：低于它就拒绝这单，而不是现场再算。谁能减、减多少、要谁签字，写在折扣发生之前。销售自己当场决定的折扣，没有参照，也没有篱笆。",
                "一次折扣会变成下一个报价的起点。所以每一次都要能说出换回了什么。说不出，就不减。"
              ],
              "zhHant": [
                "折扣從差價裡直接拿走。沒有換回來的那一件事，它就只是讓步。換回來的可以是更長的承諾、更少的送貨、或一次把零件號核對完。沒有換回，下一次購買會被訓練成繼續要折扣。",
                "先寫地板：低於它就拒絕這單，而不是現場再算。誰能減、減多少、要誰簽字，寫在折扣發生之前。銷售自己當場決定的折扣，沒有參照，也沒有籬笆。",
                "一次折扣會變成下一個報價的起點。所以每一次都要能說出換回了什麼。說不出，就不減。"
              ],
              "en": [
                "A discount is taken straight out of the difference. If nothing comes back, it is only a concession. What comes back can be a longer commitment, fewer deliveries, or the part numbers checked in one pass. With nothing coming back, the next purchase is trained to ask for the discount again.",
                "Write the floor first: below it, you refuse the order, rather than recalculating at the counter. Who may cut, by how much, and whose signature is required, is written before the discount happens. A cut the salesperson invents on the spot has no reference and no fence.",
                "One discount becomes the starting point of the next quote. So each one has to be able to say what came back. If it cannot, do not cut."
              ]
            },
            "case": {
              "zh": [
                "一个船厂要海图再减一成，否则就去现金店。销售减了。没有换回自取，没有换回一次订齐，也没有人签字。下一张维修单，这个船厂的开口就是九折之后再谈。",
                "现金店仍然不核对零件号。减掉的那一成，没有买到任何海图本来就有的差别。"
              ],
              "zhHant": [
                "一個船廠要海圖再減一成，否則就去現金店。銷售減了。沒有換回自取，沒有換回一次訂齊，也沒有人簽字。下一張維修單，這個船廠的開口就是九折之後再談。",
                "現金店仍然不核對零件號。減掉的那一成，沒有買到任何海圖本來就有的差別。"
              ],
              "en": [
                "A yard tells Haithu to cut another ten percent or they will use the cash shop. The salesperson cuts. Nothing comes back as a pickup, nothing comes back as a complete list, and nobody signs. On the next repair list, this yard opens from that already-cut price.",
                "The cash shop still does not check part numbers. The ten percent did not buy any difference Haithu already had."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 100,
                "prompt": {
                  "zh": "这张维修单如果要减，应该换回什么？并写明低于哪一个地板就不再减。",
                  "zhHant": "這張維修單如果要減，應該換回什麼？並寫明低於哪一個地板就不再減。",
                  "en": "If this repair list is going to be discounted, what has to come back? Also name the floor below which you will not cut."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "为什么这次一成的折扣训练了下一次？",
                  "zhHant": "為什麼這次一成的折扣訓練了下一次？",
                  "en": "Why does this ten percent train the next order?"
                },
                "options": [
                  {
                    "zh": "因为现金店下周会涨价。",
                    "zhHant": "因為現金店下週會漲價。",
                    "en": "Because the cash shop will raise prices next week."
                  },
                  {
                    "zh": "因为没有换回任何条件，下一张单的起点就变成了减过的价。",
                    "zhHant": "因為沒有換回任何條件，下一張單的起點就變成了減過的價。",
                    "en": "Because nothing came back, so the next list starts from the already-cut price."
                  },
                  {
                    "zh": "因为折扣只要口头说说，就不会被记住。",
                    "zhHant": "因為折扣只要口頭說說，就不會被記住。",
                    "en": "Because a spoken discount is never remembered."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "谁可以减价，应该在什么时候定下来？",
                  "zhHant": "誰可以減價，應該在什麼時候定下來？",
                  "en": "When is it decided who may cut a price?"
                },
                "options": [
                  {
                    "zh": "在折扣发生之前，连同幅度和签字一起写明。",
                    "zhHant": "在折扣發生之前，連同幅度和簽字一起寫明。",
                    "en": "Before the discount happens, together with the size of the cut and the signature."
                  },
                  {
                    "zh": "在客户转身要走的那一刻。",
                    "zhHant": "在客戶轉身要走的那一刻。",
                    "en": "At the moment the customer turns to leave."
                  },
                  {
                    "zh": "每次都由在场的销售重新决定。",
                    "zhHant": "每次都由在場的銷售重新決定。",
                    "en": "Each time, by whichever salesperson is there."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "insight",
        "title": {
          "zh": "洞察是一句会改决定的话",
          "zhHant": "洞察是一句會改決定的話",
          "en": "An insight is a sentence that changes a decision"
        },
        "minutes": 40,
        "lessons": [
          {
            "title": {
              "zh": "一句引语还不是洞察",
              "zhHant": "一句引語還不是洞察",
              "en": "A quote is not yet an insight"
            },
            "concept": {
              "zh": [
                "人说出来的愿望常常是表面的：想要更多功能、想要更便宜、想要省时间。洞察要写到情境里的那件工作：在这个情况下，他要往前的那一步是什么，现在雇来做这件事的办法又卡在哪里。",
                "人口特征描述他是谁，不解释他为什么在这一刻换掉旧办法。工作才是原因。同一类人在不同情境里会雇不同的东西。所以访问的单位是那一次情境，不是这个人的性格。",
                "一句能用的洞察长这样：在某个具体限制下，旧办法失败在哪一步。它还没有改任何决定之前，先要能指出那一步。说不出失败的那一步，就还是一句引语。"
              ],
              "zhHant": [
                "人說出來的願望常常是表面的：想要更多功能、想要更便宜、想要省時間。洞察要寫到情境裡的那件工作：在這個情況下，他要往前的那一步是什麼，現在僱來做這件事的辦法又卡在哪裡。",
                "人口特徵描述他是誰，不解釋他為什麼在這一刻換掉舊辦法。工作才是原因。同一類人在不同情境裡會僱不同的東西。所以訪問的單位是那一次情境，不是這個人的性格。",
                "一句能用的洞察長這樣：在某個具體限制下，舊辦法失敗在哪一步。它還沒有改任何決定之前，先要能指出那一步。說不出失敗的那一步，就還是一句引語。"
              ],
              "en": [
                "What people say they want is often the surface: more features, a lower price, time saved. An insight names the job inside a situation: in this circumstance, what progress they are trying to make, and where the thing they currently hire gets stuck.",
                "A demographic describes who they are. It does not explain why they replace the old way at this moment. The job is the cause. The same kind of person hires different things in different situations. So the unit of an interview is that one situation, not the person’s character.",
                "A usable insight looks like this: under a concrete constraint, the old way fails at this step. Before it changes any decision, it has to be able to point at that step. If it cannot, it is still a quote."
              ]
            },
            "case": {
              "zh": [
                "一款帮新入职的人准备第一周对话的应用，问卷里最多的一句是「希望再多一些语法练习」。团队准备加一套语法列表。",
                "把一个人的原话放回他的星期一看：他在茶水间要接一句同事的问话，说不出来，于是回到座位上打开语法表，仍然接不上那一句。失败的一步不是缺少一份列表，是第一句真实对话。"
              ],
              "zhHant": [
                "一款幫新入職的人準備第一週對話的應用，問卷裡最多的一句是「希望再多一些語法練習」。團隊準備加一套語法列表。",
                "把一個人的原話放回他的星期一看：他在茶水間要接一句同事的問話，說不出來，於是回到座位上打開語法表，仍然接不上那一句。失敗的一步不是缺少一份列表，是第一句真實對話。"
              ],
              "en": [
                "An app helps new hires prepare for their first week of conversation. The most common survey line is “I wish there were more grammar drills.” The team prepares another grammar list.",
                "Put one person’s words back into his Monday: in the pantry he has to answer a colleague and cannot, so he goes back to his desk, opens a grammar list, and still cannot answer that sentence. The failed step is not a missing list. It is the first real reply."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "哪一句是洞察，不是引语？",
                  "zhHant": "哪一句是洞察，不是引語？",
                  "en": "Which sentence is an insight, not a quote?"
                },
                "options": [
                  {
                    "zh": "星期一茶水间接不上同事的那一句，语法列表并没有让这句话说出来。",
                    "zhHant": "星期一茶水間接不上同事的那一句，語法列表並沒有讓這句話說出來。",
                    "en": "On Monday in the pantry he cannot answer the colleague, and the grammar list does not produce that sentence."
                  },
                  {
                    "zh": "用户希望再多一些语法练习。",
                    "zhHant": "用戶希望再多一些語法練習。",
                    "en": "Users wish there were more grammar drills."
                  },
                  {
                    "zh": "年轻职员喜欢学习。",
                    "zhHant": "年輕職員喜歡學習。",
                    "en": "Young staff like to study."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "用这一个星期一，写出旧办法失败的那一步。不要写成「他们想要更多功能」。",
                  "zhHant": "用這一個星期一，寫出舊辦法失敗的那一步。不要寫成「他們想要更多功能」。",
                  "en": "Using this one Monday, write the step where the old way fails. Do not write “they want more features.”"
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "为什么不能用「新入职、二十五岁」来代替这个情境？",
                  "zhHant": "為什麼不能用「新入職、二十五歲」來代替這個情境？",
                  "en": "Why can “new hire, age twenty-five” not replace this situation?"
                },
                "options": [
                  {
                    "zh": "因为年龄越大越需要语法。",
                    "zhHant": "因為年齡越大越需要語法。",
                    "en": "Because older people need more grammar."
                  },
                  {
                    "zh": "因为问卷已经把原因算出来了。",
                    "zhHant": "因為問卷已經把原因算出來了。",
                    "en": "Because the survey has already calculated the cause."
                  },
                  {
                    "zh": "因为年龄描述他是谁，不解释他在茶水间为什么说不出那一句。",
                    "zhHant": "因為年齡描述他是誰，不解釋他在茶水間為什麼說不出那一句。",
                    "en": "Because age describes who he is. It does not explain why he cannot say that sentence in the pantry."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "访问要重建一次更换",
              "zhHant": "訪問要重建一次更換",
              "en": "An interview rebuilds one switch"
            },
            "concept": {
              "zh": [
                "问卷能数有多少人勾了某一项。它拿不到更换是怎样发生的。一次有用的访问只追一个最近的真实更换：他放下了什么，又雇了什么。从第一次卡住，到开始留意，到真的去找，到换上的那一刻。",
                "推动来自旧办法的失败。拉动来自新办法答应的那一步。拦住他的是对新办法的不安，和旧办法的习惯。多数团队只加拉动，于是人们继续说想要，却不换。",
                "不要问「你通常怎么做」，也不要问「你想要什么功能」。问上一次：当时在哪里，卡在哪一句，后来打开了什么。细节是为了回到那一刻，不是为了凑故事。"
              ],
              "zhHant": [
                "問卷能數有多少人勾了某一項。它拿不到更換是怎樣發生的。一次有用的訪問只追一個最近的真實更換：他放下了什麼，又僱了什麼。從第一次卡住，到開始留意，到真的去找，到換上的那一刻。",
                "推動來自舊辦法的失敗。拉動來自新辦法答應的那一步。攔住他的是對新辦法的不安，和舊辦法的習慣。多數團隊只加拉動，於是人們繼續說想要，卻不換。",
                "不要問「你通常怎麼做」，也不要問「你想要什麼功能」。問上一次：當時在哪裡，卡在哪一句，後來打開了什麼。細節是為了回到那一刻，不是為了湊故事。"
              ],
              "en": [
                "A survey can count how many people ticked a box. It cannot show how a switch happened. A useful interview follows one recent real switch: what they put down, and what they hired. From the first time it stuck, to noticing, to actually looking, to the moment they switched.",
                "The push is the old way failing. The pull is the step the new way promises. What holds them is anxiety about the new way, and habit in the old one. Most teams only add pull, so people keep saying they want something and do not switch.",
                "Do not ask “what do you usually do,” and do not ask “what feature do you want.” Ask about the last time: where they were, which sentence stuck, what they opened afterward. The detail is there to return to that moment, not to decorate a story."
              ]
            },
            "case": {
              "zh": [
                "产品经理问了八个人「你需要什么」。答案都是省时间。没有人被问到上一次说不出话的那个早晨。",
                "其中一个人其实记得：他先在通勤时打开了语法表，到了茶水间仍然没用，当天下午才第一次搜索「怎么接同事的问话」。搜索发生在失败之后，不在问卷的勾选里。"
              ],
              "zhHant": [
                "產品經理問了八個人「你需要什麼」。答案都是省時間。沒有人被問到上一次說不出話的那個早晨。",
                "其中一個人其實記得：他先在通勤時打開了語法表，到了茶水間仍然沒用，當天下午才第一次搜索「怎麼接同事的問話」。搜索發生在失敗之後，不在問卷的勾選裡。"
              ],
              "en": [
                "A product manager asked eight people “what do you need.” Every answer was saving time. Nobody was asked about the last morning they could not speak.",
                "One of them does remember: he opened the grammar list on the commute, it was still useless in the pantry, and only that afternoon did he search “how to answer a colleague.” The search happened after the failure. It is not in the survey tick."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 100,
                "prompt": {
                  "zh": "给这个人写两个问题，用来重建他的更换：一个问旧办法怎么失败，一个问他后来雇了什么。不要问他想要什么功能。",
                  "zhHant": "給這個人寫兩個問題，用來重建他的更換：一個問舊辦法怎麼失敗，一個問他後來僱了什麼。不要問他想要什麼功能。",
                  "en": "Write two questions for this person that rebuild his switch: one for how the old way failed, one for what he hired afterward. Do not ask what feature he wants."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "「你通常怎么练习」差在哪里？",
                  "zhHant": "「你通常怎麼練習」差在哪裡？",
                  "en": "What is wrong with “how do you usually practice”?"
                },
                "options": [
                  {
                    "zh": "它太具体，会让人不好意思。",
                    "zhHant": "它太具體，會讓人不好意思。",
                    "en": "It is too specific, so people become shy."
                  },
                  {
                    "zh": "它问的是习惯的概括，不是一次更换里卡住的那一刻。",
                    "zhHant": "它問的是習慣的概括，不是一次更換裡卡住的那一刻。",
                    "en": "It asks for a summary of habit, not the moment that got stuck inside one switch."
                  },
                  {
                    "zh": "它应该改成多选题，这样就能变成洞察。",
                    "zhHant": "它應該改成多選題，這樣就能變成洞察。",
                    "en": "It should become multiple choice, and then it will be an insight."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "八个人都说省时间，这说明了什么？",
                  "zhHant": "八個人都說省時間，這說明了什麼？",
                  "en": "Eight people all say “save time.” What does that show?"
                },
                "options": [
                  {
                    "zh": "问卷可以数出一句表面的话，但还没有一次更换的时间线。",
                    "zhHant": "問卷可以數出一句表面的話，但還沒有一次更換的時間線。",
                    "en": "A survey can count a surface sentence, and it still has no timeline of one switch."
                  },
                  {
                    "zh": "洞察已经足够，可以开始加语法列表。",
                    "zhHant": "洞察已經足夠，可以開始加語法列表。",
                    "en": "The insight is already enough, and the grammar list can be added."
                  },
                  {
                    "zh": "拉动已经解决，人们会因此更换。",
                    "zhHant": "拉動已經解決，人們會因此更換。",
                    "en": "The pull is solved, so people will switch."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "洞察要改一个决定",
              "zhHant": "洞察要改一個決定",
              "en": "An insight has to change one decision"
            },
            "concept": {
              "zh": [
                "洞察如果不能改产品、定价或那一句信息里的一个决定，它就还是墙上的句子。改的是失败的那一步，不是人们顺口说想要的那一张列表。",
                "一个决定只接一个洞察。把语法列表和第一句对话同时做，你就不知道之后的更换是哪一个决定造成的。",
                "改完要能指回访问里的那一刻：茶水间的那一句现在被哪一个练习接住。指不回去，这个决定就不是从洞察来的。"
              ],
              "zhHant": [
                "洞察如果不能改產品、定價或那一句信息裡的一個決定，它就還是牆上的句子。改的是失敗的那一步，不是人們順口說想要的那一張列表。",
                "一個決定只接一個洞察。把語法列表和第一句對話同時做，你就不知道之後的更換是哪一個決定造成的。",
                "改完要能指回訪問裡的那一刻：茶水間的那一句現在被哪一個練習接住。指不回去，這個決定就不是從洞察來的。"
              ],
              "en": [
                "If an insight cannot change one decision in the product, the price, or the message, it is still a sentence on the wall. What changes is the step that failed, not the list people happened to say they wanted.",
                "One decision takes one insight. Build the grammar list and the first real reply at the same time, and you will not know which decision caused the next switch.",
                "After the change, you have to be able to point back at the moment in the interview: which exercise now catches the sentence in the pantry. If you cannot point back, the decision did not come from the insight."
              ]
            },
            "case": {
              "zh": [
                "团队还是排期做了四十个语法点。第一周的练习仍然没有一句来自茶水间。上线后，问卷里「想要更多语法」的人并没有少，星期一说不出话的人也没有少。",
                "洞察要求改的决定只有一个：第一课是接同事的那一句，语法表退到这句已经说出来之后。"
              ],
              "zhHant": [
                "團隊還是排期做了四十個語法點。第一週的練習仍然沒有一句來自茶水間。上線後，問卷裡「想要更多語法」的人並沒有少，星期一說不出話的人也沒有少。",
                "洞察要求改的決定只有一個：第一課是接同事的那一句，語法表退到這句已經說出來之後。"
              ],
              "en": [
                "The team still scheduled forty grammar points. The first week’s exercise still has no sentence from a pantry. After launch, the survey line “more grammar” did not shrink, and neither did the Monday when people cannot speak.",
                "The insight asks for one decision: the first lesson is answering the colleague. The grammar list waits until that sentence has been said."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "哪个决定是从这句洞察来的？",
                  "zhHant": "哪個決定是從這句洞察來的？",
                  "en": "Which decision comes from this insight?"
                },
                "options": [
                  {
                    "zh": "再加四十个语法点，因为问卷里人最多。",
                    "zhHant": "再加四十個語法點，因為問卷里人最多。",
                    "en": "Add forty more grammar points, because that box was ticked most."
                  },
                  {
                    "zh": "同时做语法列表和对话练习，这样两种需求都满足。",
                    "zhHant": "同時做語法列表和對話練習，這樣兩種需求都滿足。",
                    "en": "Build the grammar list and the conversation exercise together, so both requests are met."
                  },
                  {
                    "zh": "第一课只练茶水间要接的那一句，语法表放到这句说出来之后。",
                    "zhHant": "第一課只練茶水間要接的那一句，語法表放到這句說出來之後。",
                    "en": "The first lesson only practices the sentence he has to answer in the pantry. The grammar list waits until that sentence has been said."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 80,
                "prompt": {
                  "zh": "说明为什么「问卷人数没有减少」不能证明语法列表是对的决定。指回茶水间那一步。",
                  "zhHant": "說明為什麼「問卷人數沒有減少」不能證明語法列表是對的決定。指回茶水間那一步。",
                  "en": "Explain why “the survey count did not fall” does not prove the grammar list was the right decision. Point back at the pantry step."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "同时做两件事，损失的是什么？",
                  "zhHant": "同時做兩件事，損失的是什麼？",
                  "en": "What is lost by doing both changes at once?"
                },
                "options": [
                  {
                    "zh": "你无法知道之后的更换是哪一个决定造成的。",
                    "zhHant": "你無法知道之後的更換是哪一個決定造成的。",
                    "en": "You cannot tell which decision caused the next switch."
                  },
                  {
                    "zh": "洞察会自动变成两个。",
                    "zhHant": "洞察會自動變成兩個。",
                    "en": "The insight automatically becomes two insights."
                  },
                  {
                    "zh": "访问就可以不用做了。",
                    "zhHant": "訪問就可以不用做了。",
                    "en": "The interviews no longer have to be done."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "renshi": {
    "courses": [
      {
        "id": "hire",
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
      {
        "id": "goals",
        "title": {
          "zh": "目标写结果，不写忙碌",
          "zhHant": "目標寫結果，不寫忙碌",
          "en": "A goal names an outcome, not busyness"
        },
        "minutes": 40,
        "lessons": [
          {
            "title": {
              "zh": "结果和活动不是同一个目标",
              "zhHant": "結果和活動不是同一個目標",
              "en": "An outcome and an activity are not the same goal"
            },
            "concept": {
              "zh": [
                "目标要写工作变成了什么，不是人做了多少动作。开了五次会、写了三份备忘，是活动。九点半前收完货、十点交出对得上的异常数量，是结果。活动可以做完，结果仍然没有发生。",
                "一个能在日期上对上的目标有数字，也有截止。没有数字的「支持场地」是愿望。到了考核，愿望只能靠感觉打分。",
                "活动可以当作过程里的检查，但不能代替结果。把活动写成目标，人会被奖励去制造动作。"
              ],
              "zhHant": [
                "目標要寫工作變成了什麼，不是人做了多少動作。開了五次會、寫了三份備忘，是活動。九點半前收完貨、十點交出對得上的異常數量，是結果。活動可以做完，結果仍然沒有發生。",
                "一個能在日期上對上的目標有數字，也有截止。沒有數字的「支持場地」是願望。到了考核，願望只能靠感覺打分。",
                "活動可以當作過程裡的檢查，但不能代替結果。把活動寫成目標，人會被獎勵去製造動作。"
              ],
              "en": [
                "A goal names what the work became, not how many motions a person made. Five meetings and three memos are activity. Receiving the goods before 9:30 and handing over exception counts that match by 10:00 is an outcome. The activity can be finished while the outcome never happens.",
                "A goal that can be checked on a date has a number and a deadline. “Support the site,” with no number, is a wish. At review, a wish can only be scored by feel.",
                "Activity can be a check along the way. It cannot stand in for the outcome. Write the activity as the goal, and the person is rewarded for producing motion."
              ]
            },
            "case": {
              "zh": [
                "澄湾给观塘的营运协调写的季度目标是：「积极支持场地，多沟通。」考核时负责人说他开会很勤，给了三分，因为感觉不够积极。",
                "同一季度里，有十二天异常表在十点后才到，其中四天的数量和仓库对不上。开会的次数没有被问。"
              ],
              "zhHant": [
                "澄灣給觀塘的營運協調寫的季度目標是：「積極支持場地，多溝通。」考核時負責人說他開會很勤，給了三分，因為感覺不夠積極。",
                "同一季度裡，有十二天異常表在十點後才到，其中四天的數量和倉庫對不上。開會的次數沒有被問。"
              ],
              "en": [
                "Chengwan’s quarterly goal for the Kwun Tong coordinator says: “Proactively support the site and communicate more.” At review the lead says he attended meetings diligently and scores him three out of five, because he did not feel proactive enough.",
                "In the same quarter the exception form arrived after 10:00 on twelve days, and on four of those days the counts did not match the warehouse. The number of meetings was not asked."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "把「积极支持场地」改写成一个有数字、有日期的结果。用上异常表和十点。",
                  "zhHant": "把「積極支持場地」改寫成一個有數字、有日期的結果。用上異常表和十點。",
                  "en": "Rewrite “proactively support the site” as an outcome with a number and a date. Use the exception form and 10:00."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "哪一个是结果，不是活动？",
                  "zhHant": "哪一個是結果，不是活動？",
                  "en": "Which is an outcome, not an activity?"
                },
                "options": [
                  {
                    "zh": "本季参加至少二十次场地会议。",
                    "zhHant": "本季參加至少二十次場地會議。",
                    "en": "Attend at least twenty site meetings this quarter."
                  },
                  {
                    "zh": "本季异常表在十点前交出，且与仓库不一致的天数不多于两天。",
                    "zhHant": "本季異常表在十點前交出，且與倉庫不一致的天數不多於兩天。",
                    "en": "This quarter the exception form is handed over by 10:00, and days that do not match the warehouse are no more than two."
                  },
                  {
                    "zh": "保持积极的沟通态度。",
                    "zhHant": "保持積極的溝通態度。",
                    "en": "Maintain a proactive attitude toward communication."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "开会很勤却给三分，问题在哪？",
                  "zhHant": "開會很勤卻給三分，問題在哪？",
                  "en": "He attended meetings diligently and still scored three. What is wrong?"
                },
                "options": [
                  {
                    "zh": "分数对着感觉，没有对着十二天晚到的表。",
                    "zhHant": "分數對著感覺，沒有對著十二天晚到的表。",
                    "en": "The score faces a feeling, not the form that was late on twelve days."
                  },
                  {
                    "zh": "三分太高，应该是一分。",
                    "zhHant": "三分太高，應該是一分。",
                    "en": "Three is too high. It should be one."
                  },
                  {
                    "zh": "会议次数才是结果，表只是活动。",
                    "zhHant": "會議次數才是結果，表只是活動。",
                    "en": "The meeting count is the outcome. The form is only activity."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "一段时期只盯一个主结果",
              "zhHant": "一段時期只盯一個主結果",
              "en": "One period watches one primary outcome"
            },
            "concept": {
              "zh": [
                "十二个指标会让人挑选最好看的那个。一段时期的主结果只留一个，其他数字是用来解释它的，不是用来替换它的。",
                "考核时把两个人放在同一个结果上比，不比谁更让人喜欢。喜欢会把活动看成努力。同一个结果才能看出谁的工作真的发生了。",
                "主结果在季初写定。季中才改口径，是在结果不好看之后换了一道门。"
              ],
              "zhHant": [
                "十二個指標會讓人挑選最好看的那個。一段時期的主結果只留一個，其他數字是用來解釋它的，不是用來替換它的。",
                "考核時把兩個人放在同一個結果上比，不比誰更讓人喜歡。喜歡會把活動看成努力。同一個結果才能看出誰的工作真的發生了。",
                "主結果在季初寫定。季中才改口徑，是在結果不好看之後換了一道門。"
              ],
              "en": [
                "Twelve measures let a person pick the one that looks best. A period keeps one primary outcome. The other numbers explain it. They do not replace it.",
                "At review, compare two people on that same outcome, not on who is easier to like. Liking turns activity into effort. Only the same outcome shows whose work actually happened.",
                "The primary outcome is written at the start of the quarter. Changing the definition in the middle is switching gates after the result looks bad."
              ]
            },
            "case": {
              "zh": [
                "负责人后来又加了八项：会议出席、邮件回复速度、同事印象、着装、创新提议。协调员用邮件速度为自己辩护。晚到的十二天没有进入谈话。",
                "另一位协调员表几乎没有晚到，但话少，印象分更低。"
              ],
              "zhHant": [
                "負責人後來又加了八項：會議出席、郵件回覆速度、同事印象、著裝、創新提議。協調員用郵件速度為自己辯護。晚到的十二天沒有進入談話。",
                "另一位協調員表幾乎沒有晚到，但話少，印象分更低。"
              ],
              "en": [
                "The lead later adds eight items: meeting attendance, email speed, colleagues’ impression, clothing, and suggestions. The coordinator defends himself with email speed. The twelve late days never enter the conversation.",
                "Another coordinator’s form is almost never late, but she speaks less, and her impression score is lower."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "这段考核该以哪一个为主结果？",
                  "zhHant": "這段考核該以哪一個為主結果？",
                  "en": "Which primary outcome should this review use?"
                },
                "options": [
                  {
                    "zh": "邮件回复速度，因为他拿得出数字。",
                    "zhHant": "郵件回覆速度，因為他拿得出數字。",
                    "en": "Email speed, because he can produce a number."
                  },
                  {
                    "zh": "同事印象，因为团队感受也是工作。",
                    "zhHant": "同事印象，因為團隊感受也是工作。",
                    "en": "Colleagues’ impression, because how the team feels is also the work."
                  },
                  {
                    "zh": "十点前交出且能对上的异常表。其余数字只解释它，不替换它。",
                    "zhHant": "十點前交出且能對上的異常表。其餘數字只解釋它，不替換它。",
                    "en": "The exception form handed over by 10:00 and able to match. The other numbers only explain it. They do not replace it."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 80,
                "prompt": {
                  "zh": "说明为什么话少的那位不能因为印象分更低就被判结果更差。用同一个主结果来写。",
                  "zhHant": "說明為什麼話少的那位不能因為印象分更低就被判結果更差。用同一個主結果來寫。",
                  "en": "Explain why the quieter coordinator cannot be judged a worse outcome because her impression score is lower. Use the same primary outcome."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "季中把目标改成邮件速度，等于什么？",
                  "zhHant": "季中把目標改成郵件速度，等於什麼？",
                  "en": "Changing the goal to email speed mid-quarter is what?"
                },
                "options": [
                  {
                    "zh": "结果不好看之后换了一道门。",
                    "zhHant": "結果不好看之後換了一道門。",
                    "en": "Switching gates after the result looks bad."
                  },
                  {
                    "zh": "更公平，因为邮件更容易数。",
                    "zhHant": "更公平，因為郵件更容易數。",
                    "en": "Fairer, because email is easier to count."
                  },
                  {
                    "zh": "校准。把两个人放回同一个结果。",
                    "zhHant": "校準。把兩個人放回同一個結果。",
                    "en": "Calibration. Putting both people back on the same outcome."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "分数要能指回那个结果",
              "zhHant": "分數要能指回那個結果",
              "en": "A score has to point back at the outcome"
            },
            "concept": {
              "zh": [
                "分数不是性格的温度。它要能指回季初写下的那个结果：做到了、部分做到、没有做到。指不回去的分数，下个季度无法用来改工作。",
                "「态度三分」没有告诉他下一次十点的表要怎样。能改的话会写成：下个季度晚到的天数不超过两天，对不上的天数要单独说明原因。",
                "这一步和聘用时的标准是同一条线：能核对的才写进记录。差别是，这里对的是一整段时期的结果，不是一次面试里的故事。"
              ],
              "zhHant": [
                "分數不是性格的溫度。它要能指回季初寫下的那個結果：做到了、部分做到、沒有做到。指不回去的分數，下個季度無法用來改工作。",
                "「態度三分」沒有告訴他下一次十點的表要怎樣。能改的話會寫成：下個季度晚到的天數不超過兩天，對不上的天數要單獨說明原因。",
                "這一步和聘用時的標準是同一條線：能核對的才寫進記錄。差別是，這裡對的是一整段時期的結果，不是一次面試裡的故事。"
              ],
              "en": [
                "A score is not the temperature of a personality. It has to point back at the outcome written at the start: met, partly met, or not met. A score that cannot point back cannot be used to change the work next quarter.",
                "“Attitude: three” does not tell him what the 10:00 form should do next time. A sentence he can use says: next quarter, late days do not exceed two, and a day that does not match states why.",
                "This is the same line as the hiring criterion: only what can be checked goes into the record. The difference is that here you are matching a whole period’s outcome, not one story in an interview."
              ]
            },
            "case": {
              "zh": [
                "记录上写着「态度三分，仍需更积极」。没有十二天，没有四天对不上，也没有下个季度的数。",
                "协调员离开谈话时知道自己被觉得不够积极，不知道表要在哪一天之前改。"
              ],
              "zhHant": [
                "記錄上寫著「態度三分，仍需更積極」。沒有十二天，沒有四天對不上，也沒有下個季度的數。",
                "協調員離開談話時知道自己被覺得不夠積極，不知道表要在哪一天之前改。"
              ],
              "en": [
                "The record says “attitude three, still needs to be more proactive.” It has no twelve days, no four mismatched days, and no number for next quarter.",
                "He leaves knowing he is thought not proactive enough. He does not know by which day the form has to change."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 100,
                "prompt": {
                  "zh": "重写这条记录：分数指回哪一个结果，以及下个季度哪一个数字算做到。不要写积极。",
                  "zhHant": "重寫這條記錄：分數指回哪一個結果，以及下個季度哪一個數字算做到。不要寫積極。",
                  "en": "Rewrite the record: which outcome the score points back to, and which number next quarter counts as met. Do not write proactive."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "「态度三分」不能用在下一季，因为什么？",
                  "zhHant": "「態度三分」不能用在下一季，因為什麼？",
                  "en": "Why can “attitude: three” not be used next quarter?"
                },
                "options": [
                  {
                    "zh": "因为三分在数学上不是整数结果。",
                    "zhHant": "因為三分在數學上不是整數結果。",
                    "en": "Because three is not a whole-number outcome in mathematics."
                  },
                  {
                    "zh": "因为它没有指回十点的表，他无法照着改下一次。",
                    "zhHant": "因為它沒有指回十點的表，他無法照著改下一次。",
                    "en": "Because it does not point back at the 10:00 form, so he cannot change the next one from it."
                  },
                  {
                    "zh": "因为态度应该是五分制里的四分。",
                    "zhHant": "因為態度應該是五分制裡的四分。",
                    "en": "Because attitude should be four on a five-point scale."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "这一讲和面试里的行为证据，差别在哪？",
                  "zhHant": "這一講和麪試裡的行為證據，差別在哪？",
                  "en": "How is this lecture different from behavioral evidence in an interview?"
                },
                "options": [
                  {
                    "zh": "这里对的是一整段时期写下的结果，不是一次经历里的故事。",
                    "zhHant": "這裡對的是一整段時期寫下的結果，不是一次經歷裡的故事。",
                    "en": "Here you match an outcome written for a whole period, not a story inside one episode."
                  },
                  {
                    "zh": "这里可以只写性格，面试才需要行为。",
                    "zhHant": "這裡可以只寫性格，面試才需要行為。",
                    "en": "Here personality is enough. Only an interview needs behavior."
                  },
                  {
                    "zh": "没有差别，所以目标可以写成积极。",
                    "zhHant": "沒有差別，所以目標可以寫成積極。",
                    "en": "There is no difference, so the goal can say proactive."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "pay",
        "title": {
          "zh": "薪酬用区间，不用一个秘密数字",
          "zhHant": "薪酬用區間，不用一個秘密數字",
          "en": "Pay uses a range, not one secret number"
        },
        "minutes": 40,
        "lessons": [
          {
            "title": {
              "zh": "一个岗位先有区间",
              "zhHant": "一個崗位先有區間",
              "en": "A role has a range first"
            },
            "concept": {
              "zh": [
                "一个岗位的薪酬先是一个区间：最低、中位、最高。中位是你声称这个熟练程度所站的位置，不是某一个朋友的报价。只有一个数字，就没有办法说这个人站在区间的哪里。",
                "内部公平先看同一件必须有的工作。两个人做的是同一份收货和同一份表，他们的比较才成立。市场用来检查中位有没有偏离你能请到人的那一档，不能用一句传闻代替区间。",
                "区间在招聘之前写定。慌忙时现场给的一个数，会变成下一个人对不上的合同。"
              ],
              "zhHant": [
                "一個崗位的薪酬先是一個區間：最低、中位、最高。中位是你聲稱這個熟練程度所站的位置，不是某一個朋友的報價。只有一個數字，就沒有辦法說這個人站在區間的哪裡。",
                "內部公平先看同一件必須有的工作。兩個人做的是同一份收貨和同一份表，他們的比較才成立。市場用來檢查中位有沒有偏離你能請到人的那一檔，不能用一句傳聞代替區間。",
                "區間在招聘之前寫定。慌忙時現場給的一個數，會變成下一個人對不上的合同。"
              ],
              "en": [
                "A role’s pay starts as a range: minimum, midpoint, maximum. The midpoint is where you claim a proficient person stands. It is not one friend’s offer. With only a single number, you cannot say where this person stands in the range.",
                "Internal equity looks first at the same must-have work. The comparison holds when two people do the same receiving and the same form. The market checks whether the midpoint has drifted from the tier where you can actually hire. A rumor cannot replace the range.",
                "The range is written before hiring. A number invented in a hurry becomes a contract the next person cannot match."
              ]
            },
            "case": {
              "zh": [
                "澄湾没有写过营运协调的区间。观塘开业时，负责人口头给了阿朗每月两万二，因为当天怕人走。两个月后，做同一份表的阿May入职，月薪一万八，没有人能说出这两个数和哪个中位有关。",
                "有同事听说别处给两万六。这句传闻既不是区间，也没有说明那份工作是不是同一件。"
              ],
              "zhHant": [
                "澄灣沒有寫過營運協調的區間。觀塘開業時，負責人口頭給了阿朗每月兩萬二，因為當天怕人走。兩個月後，做同一份表的阿May入職，月薪一萬八，沒有人能說出這兩個數和哪個中位有關。",
                "有同事聽說別處給兩萬六。這句傳聞既不是區間，也沒有說明那份工作是不是同一件。"
              ],
              "en": [
                "Chengwan never wrote a range for the operations coordinator. When Kwun Tong opened, the lead verbally gave Ah Long HK$22,000 a month, afraid he would walk that day. Two months later Ah May, doing the same form, starts at HK$18,000. Nobody can say how either number relates to a midpoint.",
                "A colleague heard that somewhere else pays HK$26,000. That rumor is not a range, and it does not say whether the work is the same job."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 100,
                "prompt": {
                  "zh": "给这个岗位补一个区间该有的三档，并说明阿朗的两万二为什么还不能当作中位。",
                  "zhHant": "給這個崗位補一個區間該有的三檔，並說明阿朗的兩萬二為什麼還不能當作中位。",
                  "en": "Add the three points a range for this role needs, and explain why Ah Long’s HK$22,000 cannot yet be the midpoint."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "内部公平先比较什么？",
                  "zhHant": "內部公平先比較什麼？",
                  "en": "What does internal equity compare first?"
                },
                "options": [
                  {
                    "zh": "做同一份收货和同一份表的人。",
                    "zhHant": "做同一份收貨和同一份表的人。",
                    "en": "People who do the same receiving and the same form."
                  },
                  {
                    "zh": "谁更先开口要更高的数。",
                    "zhHant": "誰更先開口要更高的數。",
                    "en": "Whoever asked for a higher number first."
                  },
                  {
                    "zh": "朋友传来的一个别处报价。",
                    "zhHant": "朋友傳來的一個別處報價。",
                    "en": "One offer a friend reported from somewhere else."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "两万六的传闻不能代替区间，因为什么？",
                  "zhHant": "兩萬六的傳聞不能代替區間，因為什麼？",
                  "en": "Why can the HK$26,000 rumor not replace a range?"
                },
                "options": [
                  {
                    "zh": "因为传闻一定是假的。",
                    "zhHant": "因為傳聞一定是假的。",
                    "en": "Because a rumor is always false."
                  },
                  {
                    "zh": "因为市场价必须是整数万。",
                    "zhHant": "因為市場價必須是整數萬。",
                    "en": "Because a market price must be a round ten thousand."
                  },
                  {
                    "zh": "因为它没有最低、中位和最高，也没有证明那是同一件工作。",
                    "zhHant": "因為它沒有最低、中位和最高，也沒有證明那是同一件工作。",
                    "en": "Because it has no minimum, midpoint, or maximum, and it does not show the work is the same job."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "薪酬除以中位，才知道站在哪",
              "zhHant": "薪酬除以中位，才知道站在哪",
              "en": "Pay divided by the midpoint says where they stand"
            },
            "concept": {
              "zh": [
                "一个人的薪酬除以区间中位，得到他站在哪。等于一，是你声称的熟练位置。零点八五是明显低于中位。一点一五是明显高于中位。这个比值只回答「相对于我们写下的中位」，不回答中位本身有没有定对，也不单独证明公平。",
                "同样的工作结果，一个零点八五、一个一点一五，必须有一个说得出口的原因：入职时间、范围真的不同、或结果持续不同。说不出，下一个人就会对着这个洞来谈。",
                "「因为他当天开口了」不是原因。它不能写进下一次的决定。"
              ],
              "zhHant": [
                "一個人的薪酬除以區間中位，得到他站在哪。等於一，是你聲稱的熟練位置。零點八五是明顯低於中位。一點一五是明顯高於中位。這個比值只回答「相對於我們寫下的中位」，不回答中位本身有沒有定對，也不單獨證明公平。",
                "同樣的工作結果，一個零點八五、一個一點一五，必須有一個說得出口的原因：入職時間、範圍真的不同、或結果持續不同。說不出，下一個人就會對著這個洞來談。",
                "「因為他當天開口了」不是原因。它不能寫進下一次的決定。"
              ],
              "en": [
                "Divide a person’s pay by the range midpoint and you see where they stand. One is the proficient point you claimed. 0.85 is clearly below. 1.15 is clearly above. The ratio only answers “against the midpoint we wrote.” It does not answer whether the midpoint itself is right, and it does not by itself prove equity.",
                "The same work outcome, one person at 0.85 and one at 1.15, needs a reason you can say aloud: start date, a scope that is genuinely different, or an outcome that has stayed different. If you cannot say it, the next person will negotiate into that hole.",
                "“Because he asked that day” is not a reason. It cannot be written into the next decision."
              ]
            },
            "case": {
              "zh": [
                "假如中位被写成两万，阿朗是一点一，阿May是零点九。两个人这一季的表都是同样的晚到天数。负责人的解释仍是：阿朗当天如果不要到两万二就会走。",
                "这个解释在阿May问起来的时候，会变成第二份合同：谁敢开口，谁就离开中位。"
              ],
              "zhHant": [
                "假如中位被寫成兩萬，阿朗是一點一，阿May是零點九。兩個人這一季的表都是同樣的晚到天數。負責人的解釋仍是：阿朗當天如果不要到兩萬二就會走。",
                "這個解釋在阿May問起來的時候，會變成第二份合同：誰敢開口，誰就離開中位。"
              ],
              "en": [
                "Suppose the midpoint is written as HK$20,000. Ah Long is at 1.1 and Ah May is at 0.9. Their forms were late on the same number of days this quarter. The lead’s explanation is still that Ah Long would have walked if he had not been given HK$22,000 that day.",
                "When Ah May asks, that explanation becomes a second contract: whoever dares to ask leaves the midpoint."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "一点一和零点九在这里说明了什么？",
                  "zhHant": "一點一和零點九在這裡說明了什麼？",
                  "en": "What do 1.1 and 0.9 say here?"
                },
                "options": [
                  {
                    "zh": "阿朗的工作结果比阿May好两倍。",
                    "zhHant": "阿朗的工作結果比阿May好兩倍。",
                    "en": "Ah Long’s outcome is twice as good as Ah May’s."
                  },
                  {
                    "zh": "相对于写下的中位，一个明显高于、一个低于，而这一季的结果并没有提供这个差距。",
                    "zhHant": "相對於寫下的中位，一個明顯高於、一個低於，而這一季的結果並沒有提供這個差距。",
                    "en": "Against the written midpoint, one is clearly above and one is below, and this quarter’s outcome does not supply that gap."
                  },
                  {
                    "zh": "中位一定定错了，所以比值没有用。",
                    "zhHant": "中位一定定錯了，所以比值沒有用。",
                    "en": "The midpoint must be wrong, so the ratio is useless."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "写出一个可以说给阿May听的原因，或写出为什么现在这个原因不合格。必须提到两个人的表是同样的结果。",
                  "zhHant": "寫出一個可以說給阿May聽的原因，或寫出為什麼現在這個原因不合格。必須提到兩個人的表是同樣的結果。",
                  "en": "Write a reason you could say to Ah May, or write why the current reason fails. You must mention that their forms were the same outcome."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "「因为他开口了」为什么不能留下？",
                  "zhHant": "「因為他開口了」為什麼不能留下？",
                  "en": "Why can “because he asked” not stay?"
                },
                "options": [
                  {
                    "zh": "它不能写进下一次决定，下一个人会照着这个洞来谈。",
                    "zhHant": "它不能寫進下一次決定，下一個人會照著這個洞來談。",
                    "en": "It cannot be written into the next decision. The next person will negotiate into that hole."
                  },
                  {
                    "zh": "因为开口本身就是绩效。",
                    "zhHant": "因為開口本身就是績效。",
                    "en": "Because asking is itself performance."
                  },
                  {
                    "zh": "因为比值只在员工不问的时候才用。",
                    "zhHant": "因為比值只在員工不問的時候才用。",
                    "en": "Because the ratio is only used when the employee does not ask."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "告诉本人他站在区间的哪里",
              "zhHant": "告訴本人他站在區間的哪裡",
              "en": "Tell the person where they stand in the range"
            },
            "concept": {
              "zh": [
                "一个不告诉本人的数字，会变成另一份心理契约：他以为的交换，和纸上的交换不是同一个。入职时说得清的，包括区间、他现在的位置、以及什么会让他移动。",
                "移动要连着结果，不连着音量。中位附近、结果稳定，可以停在那里。明显低于中位、结果已经达到，就要有一条走向中位的路径。已经高于中位、结果相同，加薪不是自动的。",
                "保密不会减少比较。人还是会交换数字。保密只让你失去解释的机会。"
              ],
              "zhHant": [
                "一個不告訴本人的數字，會變成另一份心理契約：他以為的交換，和紙上的交換不是同一個。入職時說得清的，包括區間、他現在的位置、以及什麼會讓他移動。",
                "移動要連著結果，不連著音量。中位附近、結果穩定，可以停在那裡。明顯低於中位、結果已經達到，就要有一條走向中位的路徑。已經高於中位、結果相同，加薪不是自動的。",
                "保密不會減少比較。人還是會交換數字。保密只讓你失去解釋的機會。"
              ],
              "en": [
                "A number you never tell the person becomes another psychological contract: the exchange they believe and the exchange on paper are not the same one. What is clear at the start includes the range, where they stand, and what would move them.",
                "Movement connects to the outcome, not to volume. Near the midpoint, with a steady outcome, they can stay. Clearly below the midpoint, with the outcome already met, there is a path toward the midpoint. Already above the midpoint, with the same outcome, a raise is not automatic.",
                "Secrecy does not reduce comparison. People still trade numbers. Secrecy only takes away your chance to explain."
              ]
            },
            "case": {
              "zh": [
                "阿May从同事那里知道了阿朗的数。没有人告诉过她区间，也没有人告诉她什么会让一万八移动。她以为入职时说的「同一份工作」包含同一档薪酬。",
                "这和开业时口头的策略承诺是同一类裂口：说出来的交换，和第一段时期实际给的，对不上。"
              ],
              "zhHant": [
                "阿May從同事那裡知道了阿朗的數。沒有人告訴過她區間，也沒有人告訴她什麼會讓一萬八移動。她以為入職時說的「同一份工作」包含同一檔薪酬。",
                "這和開業時口頭的策略承諾是同一類裂口：說出來的交換，和第一段時期實際給的，對不上。"
              ],
              "en": [
                "Ah May learns Ah Long’s number from a colleague. Nobody has told her the range, and nobody has told her what would move HK$18,000. She thought “the same job,” said when she joined, included the same tier of pay.",
                "This is the same kind of split as the verbal promise about strategy at opening: the exchange that was spoken and what the first period actually gave do not match."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 110,
                "prompt": {
                  "zh": "写你现在要告诉阿May的三件事：区间、她站在哪、什么结果会让她向中位移动。不要承诺当天把两人拉平。",
                  "zhHant": "寫你現在要告訴阿May的三件事：區間、她站在哪、什麼結果會讓她向中位移動。不要承諾當天把兩人拉平。",
                  "en": "Write the three things you tell Ah May now: the range, where she stands, and which outcome would move her toward the midpoint. Do not promise to equalize the two of them today."
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "为什么不告诉她，比较仍会发生？",
                  "zhHant": "為什麼不告訴她，比較仍會發生？",
                  "en": "Why does the comparison still happen if you do not tell her?"
                },
                "options": [
                  {
                    "zh": "因为薪酬在法律上必须公开在墙上。",
                    "zhHant": "因為薪酬在法律上必須公開在牆上。",
                    "en": "Because pay must legally be posted on the wall."
                  },
                  {
                    "zh": "因为比值会自动发到她的邮箱。",
                    "zhHant": "因為比值會自動發到她的郵箱。",
                    "en": "Because the ratio is automatically emailed to her."
                  },
                  {
                    "zh": "因为同事仍会交换数字，你只是失去了解释的机会。",
                    "zhHant": "因為同事仍會交換數字，你只是失去了解釋的機會。",
                    "en": "Because colleagues still trade numbers. You only lose the chance to explain."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "阿朗已经高于中位，这一季结果又相同。下一步哪一个符合区间？",
                  "zhHant": "阿朗已經高於中位，這一季結果又相同。下一步哪一個符合區間？",
                  "en": "Ah Long is already above the midpoint, and the outcome is the same this quarter. Which next step fits the range?"
                },
                "options": [
                  {
                    "zh": "再加一成，否则他会把数字告诉所有人。",
                    "zhHant": "再加一成，否則他會把數字告訴所有人。",
                    "en": "Add another ten percent, or he will tell everyone the number."
                  },
                  {
                    "zh": "加薪不是自动的。相同的结果不要求继续离开中位。",
                    "zhHant": "加薪不是自動的。相同的結果不要求繼續離開中位。",
                    "en": "A raise is not automatic. The same outcome does not require moving further from the midpoint."
                  },
                  {
                    "zh": "把阿May降到更低，以恢复差距。",
                    "zhHant": "把阿May降到更低，以恢復差距。",
                    "en": "Lower Ah May further, to restore the gap."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "kaifa": {
    "courses": [
      {
        "id": "page",
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
      {
        "id": "api",
        "title": {
          "zh": "接口是一份说定的资源，不是一个动词",
          "zhHant": "接口是一份說定的資源，不是一個動詞",
          "en": "An API is an agreed resource, not a verb"
        },
        "minutes": 45,
        "lessons": [
          {
            "title": {
              "zh": "资源是名词，读取可以重复",
              "zhHant": "資源是名詞，讀取可以重複",
              "en": "A resource is a noun, and a read can be repeated"
            },
            "concept": {
              "zh": [
                "接口对外的名字是一件东西，不是一个动作。失物是资源。保存这个动作不该变成地址。读取用 GET，创建常用 POST。GET 再发一次，不应该再造出第二条失物。",
                "能重复而结果不变的，才可以放心重试。创建如果没有单独的一次标识，超时后重试就会变成两条记录。所以危险的创建要能认出「这是同一次」。",
                "地址里写 doSave、setRole，是把动作假装成资源。调用的人无法知道第二次会发生什么。"
              ],
              "zhHant": [
                "接口對外的名字是一件東西，不是一個動作。失物是資源。保存這個動作不該變成地址。讀取用 GET，創建常用 POST。GET 再發一次，不應該再造出第二條失物。",
                "能重複而結果不變的，才可以放心重試。創建如果沒有單獨的一次標識，超時後重試就會變成兩條記錄。所以危險的創建要能認出「這是同一次」。",
                "地址裡寫 doSave、setRole，是把動作假裝成資源。調用的人無法知道第二次會發生什麼。"
              ],
              "en": [
                "The name an API shows is a thing, not an action. A found item is a resource. The act of saving should not become the address. A read uses GET. Creating often uses POST. Sending the same GET again should not create a second found item.",
                "Only what can be repeated without a new result is safe to retry. If a create has no separate identity for that one attempt, a retry after a timeout becomes two records. A risky create has to be able to recognize “this is the same attempt.”",
                "An address that says doSave or setRole pretends an action is a resource. The caller cannot know what a second call will do."
              ]
            },
            "case": {
              "zh": [
                "失物页的提交地址是 /doSave。学生网络慢，超时后再按一次。服务器两次都建了记录，办公处看到同一部电话两条。",
                "另一次，有人用 GET 带上 delete=1 来删除。浏览器预取这种读取时，记录会在没有人确认的情况下消失。"
              ],
              "zhHant": [
                "失物頁的提交地址是 /doSave。學生網絡慢，超時後再按一次。服務器兩次都建了記錄，辦公處看到同一部電話兩條。",
                "另一次，有人用 GET 帶上 delete=1 來刪除。瀏覽器預取這種讀取時，記錄會在沒有人確認的情況下消失。"
              ],
              "en": [
                "The lost-and-found submits to /doSave. A student’s network is slow, the request times out, and they press again. The server creates two records. The office sees two rows for one phone number.",
                "Another time someone deletes by GET with delete=1. When a browser prefetches that kind of read, the record disappears without anyone confirming it."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "哪一个地址是资源，而不是动作？",
                  "zhHant": "哪一個地址是資源，而不是動作？",
                  "en": "Which address is a resource, not an action?"
                },
                "options": [
                  {
                    "zh": "POST /found-items，同一次提交带同一个标识，重试不会变成两条。",
                    "zhHant": "POST /found-items，同一次提交帶同一個標識，重試不會變成兩條。",
                    "en": "POST /found-items, with the same identity on the same attempt, so a retry does not become two rows."
                  },
                  {
                    "zh": "GET /doSave?phone=123 用来创建。",
                    "zhHant": "GET /doSave?phone=123 用來創建。",
                    "en": "GET /doSave?phone=123 used to create."
                  },
                  {
                    "zh": "GET /found-items?delete=1 用来删除。",
                    "zhHant": "GET /found-items?delete=1 用來刪除。",
                    "en": "GET /found-items?delete=1 used to delete."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "说明为什么超时后的第二次 /doSave 会害到办公处，以及怎样认出这是同一次提交。",
                  "zhHant": "說明為什麼超時後的第二次 /doSave 會害到辦公處，以及怎樣認出這是同一次提交。",
                  "en": "Explain why the second /doSave after a timeout harms the office, and how the server recognizes that it is the same attempt."
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "GET 再发一次，应该发生什么？",
                  "zhHant": "GET 再發一次，應該發生什麼？",
                  "en": "What should happen when the same GET is sent again?"
                },
                "options": [
                  {
                    "zh": "再创建一条失物，这样才不会漏。",
                    "zhHant": "再創建一條失物，這樣才不會漏。",
                    "en": "Create another found item, so nothing is missed."
                  },
                  {
                    "zh": "删除上一条，因为读取应该保持干净。",
                    "zhHant": "刪除上一條，因為讀取應該保持乾淨。",
                    "en": "Delete the previous one, because a read should stay clean."
                  },
                  {
                    "zh": "还是读取，不新增、不删除。",
                    "zhHant": "還是讀取，不新增、不刪除。",
                    "en": "Still a read. It does not add and it does not delete."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "契约里没有的字段，服务器不信",
              "zhHant": "契約裡沒有的字段，服務器不信",
              "en": "The server does not believe a field the contract never promised"
            },
            "concept": {
              "zh": [
                "契约是你答应的字段、答应的状态码。客户端可以少发一个可选字段，不能发明一个服务器会照做的身份。角色、主人、价格，这种决定权在服务器，不在提交的 JSON 里。",
                "加一个可选字段，旧的调用者仍能用，这通常不是破坏。改掉一个字段的名字或一个状态码的含义，旧的调用者会坏，这是破坏，要有新的版本，而不是悄悄换掉。",
                "返回 200，正文里再写失败，是把契约拆了。失败要用失败的状态，并说是哪一个字段。"
              ],
              "zhHant": [
                "契約是你答應的字段、答應的狀態碼。客戶端可以少發一個可選字段，不能發明一個服務器會照做的身份。角色、主人、價格，這種決定權在服務器，不在提交的 JSON 裡。",
                "加一個可選字段，舊的調用者仍能用，這通常不是破壞。改掉一個字段的名字或一個狀態碼的含義，舊的調用者會壞，這是破壞，要有新的版本，而不是悄悄換掉。",
                "返回 200，正文裡再寫失敗，是把契約拆了。失敗要用失敗的狀態，並說是哪一個字段。"
              ],
              "en": [
                "The contract is the fields you promised and the status codes you promised. A client may omit an optional field. It may not invent an identity the server will obey. Role, owner, and price are decisions the server makes. They are not granted by the JSON that was submitted.",
                "Adding an optional field, so old callers still work, is usually not a break. Renaming a field, or changing what a status code means, breaks old callers. That needs a new version, not a quiet swap.",
                "Returning 200 and then writing failure in the body breaks the contract. Failure uses a failure status, and it names the field."
              ]
            },
            "case": {
              "zh": [
                "学生在创建失物的 JSON 里加了 role 为 office。服务器照做，于是这条请求可以导出全部电话。契约里从来没有过 role 这个字段。",
                "后来有人把 201 改成 200，正文用 ok 真或假。旧页面只认 201，于是成功的创建被当成没有建成。"
              ],
              "zhHant": [
                "學生在創建失物的 JSON 里加了 role 為 office。服務器照做，於是這條請求可以導出全部電話。契約裡從來沒有過 role 這個字段。",
                "後來有人把 201 改成 200，正文用 ok 真或假。舊頁面只認 201，於是成功的創建被當成沒有建成。"
              ],
              "en": [
                "A student adds role set to office in the JSON that creates a found item. The server obeys, so this request can export every phone number. The contract never had a role field.",
                "Later someone changes 201 to 200 and puts ok true or false in the body. The old page only recognizes 201, so a successful create is treated as not created."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "role 为 office 这件事，服务器应该怎样？",
                  "zhHant": "role 為 office 這件事，服務器應該怎樣？",
                  "en": "What should the server do with role set to office?"
                },
                "options": [
                  {
                    "zh": "相信，因为客户端最知道用户想做什么。",
                    "zhHant": "相信，因為客戶端最知道用戶想做什麼。",
                    "en": "Believe it, because the client knows best what the user wants."
                  },
                  {
                    "zh": "忽略或拒绝。角色不在契约里，导出电话也不能由这份 JSON 授予。",
                    "zhHant": "忽略或拒絕。角色不在契約裡，導出電話也不能由這份 JSON 授予。",
                    "en": "Ignore it or refuse it. Role is not in the contract, and this JSON cannot grant an export of every phone number."
                  },
                  {
                    "zh": "返回 200 和 ok 假，这样就算处理过了。",
                    "zhHant": "返回 200 和 ok 假，這樣就算處理過了。",
                    "en": "Return 200 and ok false, and then it counts as handled."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "把「201 改成 200 加 ok」说成一次破坏：旧的调用者为什么会坏，以及什么才算不破坏的改法。",
                  "zhHant": "把「201 改成 200 加 ok」說成一次破壞：舊的調用者為什麼會壞，以及什麼才算不破壞的改法。",
                  "en": "Describe “201 changed to 200 plus ok” as a break: why old callers fail, and what change would not be a break."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "哪一个改法通常不是破坏？",
                  "zhHant": "哪一個改法通常不是破壞？",
                  "en": "Which change is usually not a break?"
                },
                "options": [
                  {
                    "zh": "增加一个旧调用者可以不发的可选字段。",
                    "zhHant": "增加一箇舊調用者可以不發的可選字段。",
                    "en": "Adding an optional field that old callers may omit."
                  },
                  {
                    "zh": "把地点的含义改成楼层编号，字段名不变。",
                    "zhHant": "把地點的含義改成樓層編號，字段名不變。",
                    "en": "Changing the meaning of place to a floor number, without renaming the field."
                  },
                  {
                    "zh": "删掉电话字段。",
                    "zhHant": "刪掉電話字段。",
                    "en": "Removing the phone field."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "错误要说是哪一个字段",
              "zhHant": "錯誤要說是哪一個字段",
              "en": "An error names the field"
            },
            "concept": {
              "zh": [
                "400 是交上来的内容不能用，正文要说是哪一项。只写出错了，调用者无法改。401 和 403 仍然是两件不同的事，不要折进一个 ok 假。",
                "500 不是这一项没填。把服务器自己的失败说成用户的字段错误，人会去改一个没有错的电话。",
                "契约把这些状态写死之后，页面才知道该留住表单、该去登录、还是该说记录没有建成。"
              ],
              "zhHant": [
                "400 是交上來的內容不能用，正文要說是哪一項。只寫出錯了，調用者無法改。401 和 403 仍然是兩件不同的事，不要折進一個 ok 假。",
                "500 不是這一項沒填。把服務器自己的失敗說成用戶的字段錯誤，人會去改一個沒有錯的電話。",
                "契約把這些狀態寫死之後，頁面才知道該留住表單、該去登入、還是該說記錄沒有建成。"
              ],
              "en": [
                "A 400 means what was sent cannot be used, and the body says which field. “Something went wrong” gives the caller nothing to change. 401 and 403 are still two different facts. Do not fold them into ok false.",
                "A 500 is not an empty field. Calling the server’s own failure a field error sends the person to edit a phone number that was fine.",
                "Once the contract fixes these statuses, the page knows whether to keep the form, go to sign-in, or say the record was not created."
              ]
            },
            "case": {
              "zh": [
                "地点为空时，服务器返回 200，正文是 ok 假、message 为 error。页面不知道该指出地点。",
                "数据库连不上时，同一个正文被返回。学生反复修改一个正确的电话。"
              ],
              "zhHant": [
                "地點為空時，服務器返回 200，正文是 ok 假、message 為 error。頁面不知道該指出地點。",
                "數據庫連不上時，同一個正文被返回。學生反覆修改一個正確的電話。"
              ],
              "en": [
                "When the place is empty, the server returns 200 with ok false and message set to error. The page cannot point at the place.",
                "When the database is down, the same body is returned. The student keeps editing a phone number that was already right."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "给地点为空写一个应有的状态和一句正文，再给数据库失败写另一个状态。两个不能共用 ok 假。",
                  "zhHant": "給地點為空寫一個應有的狀態和一句正文，再給數據庫失敗寫另一個狀態。兩個不能共用 ok 假。",
                  "en": "For an empty place, write the status and one sentence of body. For a database failure, write a different status. The two cannot share ok false."
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "为什么 200 加 ok 假让页面无法做事？",
                  "zhHant": "為什麼 200 加 ok 假讓頁面無法做事？",
                  "en": "Why does 200 plus ok false leave the page unable to act?"
                },
                "options": [
                  {
                    "zh": "因为 200 的字太短。",
                    "zhHant": "因為 200 的字太短。",
                    "en": "Because the number 200 is too short."
                  },
                  {
                    "zh": "因为 ok 假在某些浏览器不显示。",
                    "zhHant": "因為 ok 假在某些瀏覽器不顯示。",
                    "en": "Because ok false does not display in some browsers."
                  },
                  {
                    "zh": "因为成功的状态里夹了失败，页面分不出该改字段还是该说没有建成。",
                    "zhHant": "因為成功的狀態裡夾了失敗，頁面分不出該改字段還是該說沒有建成。",
                    "en": "Because a failure is hidden inside a success status, so the page cannot tell whether to fix a field or say the record was not created."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "数据库连不上，不该说成什么？",
                  "zhHant": "數據庫連不上，不該說成什麼？",
                  "en": "A downed database should not be described as what?"
                },
                "options": [
                  {
                    "zh": "用户的电话字段填错了。",
                    "zhHant": "用戶的電話字段填錯了。",
                    "en": "The user’s phone field being wrong."
                  },
                  {
                    "zh": "服务器没有建成记录，可以再试。",
                    "zhHant": "服務器沒有建成記錄，可以再試。",
                    "en": "The server did not create the record, and they can try again."
                  },
                  {
                    "zh": "500，而不是 400。",
                    "zhHant": "500，而不是 400。",
                    "en": "A 500, rather than a 400."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "review",
        "title": {
          "zh": "一次审查要指出会失败的地方",
          "zhHant": "一次審查要指出會失敗的地方",
          "en": "A review names the place that will fail"
        },
        "minutes": 40,
        "lessons": [
          {
            "title": {
              "zh": "提交说明为什么，主线随时能交出去",
              "zhHant": "提交說明為什麼，主線隨時能交出去",
              "en": "A commit says why, and the main line can be handed on"
            },
            "concept": {
              "zh": [
                "一次提交的说明写为什么改，不是文件名单。下一个人要能在不打开每一个文件的情况下知道这个改动保护了什么。",
                "主线是随时可以交给下一个人的版本。没做完的实验留在分支上。把一个会谎报「已保存」的改动放进主线，等于让所有人从失败开始。",
                "说明写成「更新」或「修改」，审查的人无法知道该看哪一个行为。"
              ],
              "zhHant": [
                "一次提交的說明寫為什麼改，不是文件名單。下一個人要能在不打開每一個文件的情況下知道這個改動保護了什麼。",
                "主線是隨時可以交給下一個人的版本。沒做完的實驗留在分支上。把一個會謊報「已保存」的改動放進主線，等於讓所有人從失敗開始。",
                "說明寫成「更新」或「修改」，審查的人無法知道該看哪一個行為。"
              ],
              "en": [
                "A commit message says why, not a list of files. The next person should know what this change protects without opening every file.",
                "The main line is a version you could hand to the next person at any time. Unfinished experiments stay on a branch. Putting a change that lies “saved” onto the main line makes everyone start from the failure.",
                "A message that says “update” or “fix” leaves the reviewer unable to know which behavior to look at."
              ]
            },
            "case": {
              "zh": [
                "一次提交的说明是「更新」。内容把状态 500 时的页面改成绿色的「已保存」。它被直接合进主线。",
                "第二天另一个人从主线开始做标签。他以为保存已经是对的，于是只改了颜色的深浅。"
              ],
              "zhHant": [
                "一次提交的說明是「更新」。內容把狀態 500 時的頁面改成綠色的「已保存」。它被直接合進主線。",
                "第二天另一個人從主線開始做標籤。他以為保存已經是對的，於是只改了顏色的深淺。"
              ],
              "en": [
                "A commit message says “update.” The change turns the page green and says “saved” when the status is 500. It is merged straight to the main line.",
                "The next day someone starts from the main line to work on labels. They believe saving is already correct, so they only adjust the shade of green."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 80,
                "prompt": {
                  "zh": "重写这次提交的说明：它为什么改，以及它实际破坏了哪一个状态。不要写「更新」。",
                  "zhHant": "重寫這次提交的說明：它為什麼改，以及它實際破壞了哪一個狀態。不要寫「更新」。",
                  "en": "Rewrite the commit message: why it changed, and which status it actually breaks. Do not write “update.”"
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "为什么这个改动不该在主线上？",
                  "zhHant": "為什麼這個改動不該在主線上？",
                  "en": "Why should this change not be on the main line?"
                },
                "options": [
                  {
                    "zh": "因为绿色不是品牌色。",
                    "zhHant": "因為綠色不是品牌色。",
                    "en": "Because green is not the brand color."
                  },
                  {
                    "zh": "因为主线现在会在 500 时谎报已保存，下一个人会从失败开始。",
                    "zhHant": "因為主線現在會在 500 時謊報已保存，下一個人會從失敗開始。",
                    "en": "Because the main line now lies that a 500 was saved, and the next person starts from that failure."
                  },
                  {
                    "zh": "因为说明太短，短说明不能合并。",
                    "zhHant": "因為說明太短，短說明不能合併。",
                    "en": "Because the message is short, and short messages cannot be merged."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "没做完的实验应该在哪？",
                  "zhHant": "沒做完的實驗應該在哪？",
                  "en": "Where does an unfinished experiment belong?"
                },
                "options": [
                  {
                    "zh": "在分支上，直到它不会把失败交给下一个人。",
                    "zhHant": "在分支上，直到它不會把失敗交給下一個人。",
                    "en": "On a branch, until it will not hand a failure to the next person."
                  },
                  {
                    "zh": "直接在主线上，这样大家都能看见。",
                    "zhHant": "直接在主線上，這樣大家都能看見。",
                    "en": "Directly on the main line, so everyone can see it."
                  },
                  {
                    "zh": "只留在自己的电脑上，永远不提交。",
                    "zhHant": "只留在自己的電腦上，永遠不提交。",
                    "en": "Only on their own computer, never committed."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "审查看的是失败，不是一句通过",
              "zhHant": "審查看的是失敗，不是一句通過",
              "en": "A review looks for the failure, not a word of approval"
            },
            "concept": {
              "zh": [
                "审查要指出一个会失败的行为：空的地点被当成成功、状态被忽略、秘密进了页面、标签没有连上。没有指出你检查了哪一件，一句「可以」就不是审查。",
                "审查的人和作者看的是同一个契约。作者说改了颜色，审查要问 500 时人会相信什么。",
                "风格上的喜好可以另说。它不能代替那个失败。先写会坏的那一件。"
              ],
              "zhHant": [
                "審查要指出一個會失敗的行為：空的地點被當成成功、狀態被忽略、秘密進了頁面、標籤沒有連上。沒有指出你檢查了哪一件，一句「可以」就不是審查。",
                "審查的人和作者看的是同一個契約。作者說改了顏色，審查要問 500 時人會相信什麼。",
                "風格上的喜好可以另說。它不能代替那個失敗。先寫會壞的那一件。"
              ],
              "en": [
                "A review names a behavior that will fail: an empty place treated as success, a status ignored, a secret in the page, a label that is not tied to its field. If you do not name what you checked, the word “approved” is not a review.",
                "The reviewer and the author are looking at the same contract. The author says they changed a color. The reviewer asks what a person will believe when the status is 500.",
                "A preference about style can be said separately. It cannot replace the failure. Write the thing that breaks first."
              ]
            },
            "case": {
              "zh": [
                "审查写了「可以，颜色和品牌一致」。没有人打开 500 的情况。合进主线的第二天，办公处以为三条失败的提交已经在表里。",
                "作者后来辩解说，审查通过了，所以行为是被接受的。"
              ],
              "zhHant": [
                "審查寫了「可以，顏色和品牌一致」。沒有人打開 500 的情況。合進主線的第二天，辦公處以為三條失敗的提交已經在表裡。",
                "作者後來辯解說，審查通過了，所以行為是被接受的。"
              ],
              "en": [
                "The review says “approved, the color matches the brand.” Nobody opens the 500 case. The day after it reaches the main line, the office believes three failed submissions are on the list.",
                "The author later says the review approved it, so the behavior was accepted."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "这条审查缺了什么？",
                  "zhHant": "這條審查缺了什麼？",
                  "en": "What is this review missing?"
                },
                "options": [
                  {
                    "zh": "它没有指出 500 时页面会谎报已保存。",
                    "zhHant": "它沒有指出 500 時頁面會謊報已保存。",
                    "en": "It does not name that on a 500 the page will lie that the item was saved."
                  },
                  {
                    "zh": "它没有称赞作者的字体。",
                    "zhHant": "它沒有稱讚作者的字體。",
                    "en": "It does not praise the author’s typeface."
                  },
                  {
                    "zh": "它没有要求再改一次颜色。",
                    "zhHant": "它沒有要求再改一次顏色。",
                    "en": "It does not ask for the color to be changed again."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 80,
                "prompt": {
                  "zh": "写一条真正的审查意见：指出失败的行为，并说你要作者改哪一件。不要写「可以」。",
                  "zhHant": "寫一條真正的審查意見：指出失敗的行為，並說你要作者改哪一件。不要寫「可以」。",
                  "en": "Write a real review comment: name the failing behavior, and say what you want the author to change. Do not write “approved.”"
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "作者说「审查通过了所以行为被接受」。哪一句反驳成立？",
                  "zhHant": "作者說「審查通過了所以行為被接受」。哪一句反駁成立？",
                  "en": "The author says approval means the behavior was accepted. Which reply holds?"
                },
                "options": [
                  {
                    "zh": "通过就是契约。颜色一致代表状态也被接受。",
                    "zhHant": "通過就是契約。顏色一致代表狀態也被接受。",
                    "en": "Approval is the contract. A matching color means the status was accepted too."
                  },
                  {
                    "zh": "审查只看品牌，状态不归审查管。",
                    "zhHant": "審查只看品牌，狀態不歸審查管。",
                    "en": "A review only looks at the brand. Status is outside a review."
                  },
                  {
                    "zh": "没有人检查 500，这句通过并没有接受那个行为，它只是没有看见。",
                    "zhHant": "沒有人檢查 500，這句通過並沒有接受那個行為，它只是沒有看見。",
                    "en": "Nobody checked the 500. That approval did not accept the behavior. It only failed to look."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "一次只要求改一个缺陷",
              "zhHant": "一次只要求改一個缺陷",
              "en": "Ask for one defect at a time"
            },
            "concept": {
              "zh": [
                "一次审查意见只捆绑一个缺陷和它违反的那条契约。把命名喜好、空行和谎报成功写在一起，作者会先改空行。",
                "名字只有在它说谎时才算缺陷。doSave 谎称这是一个资源。一个你个人不喜欢、但意思是真的名字，不是这轮要拦的事。",
                "改完要能再看那一个失败：500 时不再出现已保存。看不回去，这轮审查就没有结束。"
              ],
              "zhHant": [
                "一次審查意見只捆綁一個缺陷和它違反的那條契約。把命名喜好、空行和謊報成功寫在一起，作者會先改空行。",
                "名字只有在它說謊時才算缺陷。doSave 謊稱這是一個資源。一個你個人不喜歡、但意思是真的名字，不是這輪要攔的事。",
                "改完要能再看那一個失敗：500 時不再出現已保存。看不回去，這輪審查就沒有結束。"
              ],
              "en": [
                "One review comment binds one defect to the contract it breaks. Put a naming preference, a blank line, and a false “saved” in the same comment, and the author will fix the blank line first.",
                "A name is a defect only when it lies. doSave lies that this is a resource. A name you personally dislike, whose meaning is true, is not what this round blocks.",
                "After the change you have to be able to look at that one failure again: on a 500, “saved” no longer appears. If you cannot look back, this round is not finished."
              ]
            },
            "case": {
              "zh": [
                "审查写了一长段：变量名不喜欢、空行太多、还有保存的颜色。作者改了空行和变量名，500 的绿字还在。",
                "第二轮如果仍然不提 500，主线会继续谎报。"
              ],
              "zhHant": [
                "審查寫了一長段：變量名不喜歡、空行太多、還有保存的顏色。作者改了空行和變量名，500 的綠字還在。",
                "第二輪如果仍然不提 500，主線會繼續謊報。"
              ],
              "en": [
                "The review is a long paragraph: a disliked variable name, too many blank lines, and also the color of save. The author fixes the blank lines and the name. The green word on a 500 is still there.",
                "If the second round still does not mention the 500, the main line keeps lying."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "把这条审查收成一个缺陷：它违反了哪条契约，作者改完后你要再看哪一个请求。",
                  "zhHant": "把這條審查收成一個缺陷：它違反了哪條契約，作者改完後你要再看哪一個請求。",
                  "en": "Reduce this review to one defect: which contract it breaks, and which request you will look at again after the author changes it."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "变量名什么时候才算这轮的缺陷？",
                  "zhHant": "變量名什麼時候才算這輪的缺陷？",
                  "en": "When is a variable name this round’s defect?"
                },
                "options": [
                  {
                    "zh": "只要审查者不喜欢，就是缺陷。",
                    "zhHant": "只要審查者不喜歡，就是缺陷。",
                    "en": "Whenever the reviewer dislikes it, it is a defect."
                  },
                  {
                    "zh": "当这个名字在说谎，例如用动作冒充资源。",
                    "zhHant": "當這個名字在說謊，例如用動作冒充資源。",
                    "en": "When the name lies, for example when an action pretends to be a resource."
                  },
                  {
                    "zh": "当空行超过三行。",
                    "zhHant": "當空行超過三行。",
                    "en": "When there are more than three blank lines."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "作者改了空行，500 的绿字还在。这轮结束了吗？",
                  "zhHant": "作者改了空行，500 的綠字還在。這輪結束了嗎？",
                  "en": "The author fixed the blank lines, and the green word on a 500 remains. Is this round finished?"
                },
                "options": [
                  {
                    "zh": "没有。你还要再看那个 500，直到谎报消失。",
                    "zhHant": "沒有。你還要再看那個 500，直到謊報消失。",
                    "en": "No. You still look at that 500 until the lie is gone."
                  },
                  {
                    "zh": "结束了。空行是审查里的第一句。",
                    "zhHant": "結束了。空行是審查裡的第一句。",
                    "en": "Yes. The blank lines were the first sentence of the review."
                  },
                  {
                    "zh": "结束了。因为已经有过一轮审查。",
                    "zhHant": "結束了。因為已經有過一輪審查。",
                    "en": "Yes. Because there has already been one round."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "meishu": {
    "courses": [
      {
        "id": "layout",
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
      {
        "id": "color",
        "title": {
          "zh": "颜色先有职务，再谈好看",
          "zhHant": "顏色先有職務，再談好看",
          "en": "A color has a job before it is liked"
        },
        "minutes": 40,
        "lessons": [
          {
            "title": {
              "zh": "一种颜色只做一件事",
              "zhHant": "一種顏色只做一件事",
              "en": "One color does one job"
            },
            "concept": {
              "zh": [
                "颜色先分配职务：底、正文、一个动作、一个警告。没有职务的一套喜欢的颜色，只是颜料。动作的颜色只出现在动作上，不出现在标志、标题和时间上。",
                "同一种颜色做三件事，人就无法知道现在该按、该读、还是出错了。职务写在系统里，不写在每一张画面的临时决定里。",
                "这一讲不是再谈一张海报的第一眼。这里的问题是同一套颜色穿过许多画面时，还认不认得自己的职务。"
              ],
              "zhHant": [
                "顏色先分配職務：底、正文、一個動作、一個警告。沒有職務的一套喜歡的顏色，只是顏料。動作的顏色只出現在動作上，不出現在標誌、標題和時間上。",
                "同一種顏色做三件事，人就無法知道現在該按、該讀、還是出錯了。職務寫在系統裡，不寫在每一張畫面的臨時決定裡。",
                "這一講不是再談一張海報的第一眼。這裡的問題是同一套顏色穿過許多畫面時，還認不認得自己的職務。"
              ],
              "en": [
                "A color is assigned a job first: ground, text, one action, one warning. A set of favorite colors with no jobs is only pigment. The action color appears on the action. It does not appear on the logo, the title, and the time.",
                "When one color does three jobs, a person cannot tell whether to press, to read, or that something failed. The jobs are written in the system, not invented again on each screen.",
                "This lecture is not the poster’s first glance again. The question here is whether the same colors still recognize their jobs across many screens."
              ]
            },
            "case": {
              "zh": [
                "学生事务的页面用同一种橙色做三件事：提交按钮、赞助商标志、以及地点没填时的提示。橙色出现在哪里，意思都不一样。",
                "新生在手机上看到橙色，不知道该按，还是这页已经出错。"
              ],
              "zhHant": [
                "學生事務的頁面用同一種橙色做三件事：提交按鈕、贊助商標誌、以及地點沒填時的提示。橙色出現在哪裡，意思都不一樣。",
                "新生在手機上看到橙色，不知道該按，還是這頁已經出錯。"
              ],
              "en": [
                "The student-affairs screens use one orange for three jobs: the submit button, the sponsor’s logo, and the hint when the place is empty. Wherever the orange appears, it means something else.",
                "A new student on a phone sees orange and cannot tell whether to press, or whether the page has already failed."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "给橙色只留一个职务，并写出标志和错误分别改用什么信号。错误不能只靠换成另一种橙色。",
                  "zhHant": "給橙色只留一個職務，並寫出標誌和錯誤分別改用什麼信號。錯誤不能只靠換成另一種橙色。",
                  "en": "Leave orange only one job, and say what signal the logo and the error use instead. The error cannot only switch to another orange."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "同一种橙色做提交、标志和错误，首先破坏的是什么？",
                  "zhHant": "同一種橙色做提交、標誌和錯誤，首先破壞的是什麼？",
                  "en": "One orange used for submit, the logo, and the error breaks what first?"
                },
                "options": [
                  {
                    "zh": "对比的数学公式。",
                    "zhHant": "對比的數學公式。",
                    "en": "The mathematics of a contrast formula."
                  },
                  {
                    "zh": "颜色的职务。人无法从颜色知道该按、该读，还是出错了。",
                    "zhHant": "顏色的職務。人無法從顏色知道該按、該讀，還是出錯了。",
                    "en": "The color’s job. A person cannot tell from the color whether to press, to read, or that something failed."
                  },
                  {
                    "zh": "字体的版权。",
                    "zhHant": "字體的版權。",
                    "en": "The license of the typeface."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "动作色应该出现在哪？",
                  "zhHant": "動作色應該出現在哪？",
                  "en": "Where should the action color appear?"
                },
                "options": [
                  {
                    "zh": "只出现在那个动作上。",
                    "zhHant": "只出現在那個動作上。",
                    "en": "Only on that action."
                  },
                  {
                    "zh": "出现在所有想被看见的东西上。",
                    "zhHant": "出現在所有想被看見的東西上。",
                    "en": "On everything that wants to be seen."
                  },
                  {
                    "zh": "只出现在赞助商标志上。",
                    "zhHant": "只出現在贊助商標誌上。",
                    "en": "Only on the sponsor’s logo."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "颜色不能是唯一的信号",
              "zhHant": "顏色不能是唯一的信號",
              "en": "Color cannot be the only signal"
            },
            "concept": {
              "zh": [
                "一个必须被知道的差别，要有颜色以外的另一条路：文字、图标或位置。只把边框变红，在灰度里、在看不清红绿的人那里，差别会消失。",
                "正文色相对底色仍然要达得到大约 4.5 比 1。那是正文这个职务的测试，不是这一讲的全部。职务分配对了，对比不够，正文职务仍然失败。",
                "警告色如果和动作色相同，再加文字也要说的是警告，不是又一个动作。文字本身不能再制造第二个职务。"
              ],
              "zhHant": [
                "一個必須被知道的差別，要有顏色以外的另一條路：文字、圖標或位置。只把邊框變紅，在灰度裡、在看不清紅綠的人那裡，差別會消失。",
                "正文色相對底色仍然要達得到大約 4.5 比 1。那是正文這個職務的測試，不是這一講的全部。職務分配對了，對比不夠，正文職務仍然失敗。",
                "警告色如果和動作色相同，再加文字也要說的是警告，不是又一個動作。文字本身不能再製造第二個職務。"
              ],
              "en": [
                "A difference someone must know needs a path besides color: words, an icon, or position. A border that only turns red disappears in grayscale, and for people who cannot separate red from green.",
                "Text against its ground still has to reach about 4.5 to 1. That is the test of the text job. It is not the whole lecture. If the jobs are assigned and the contrast fails, the text job still fails.",
                "If the warning color is the same as the action color, the added words have to say the warning, not another action. The words themselves must not invent a second job."
              ]
            },
            "case": {
              "zh": [
                "地点为空时，只有框的边变成橙色，和提交按钮一样。没有文字说是地点。灰度打印时，边和按钮几乎分不开。",
                "设计者说橙色已经够醒目，所以不必写字。"
              ],
              "zhHant": [
                "地點為空時，只有框的邊變成橙色，和提交按鈕一樣。沒有文字說是地點。灰度打印時，邊和按鈕幾乎分不開。",
                "設計者說橙色已經夠醒目，所以不必寫字。"
              ],
              "en": [
                "When the place is empty, only the border turns orange, the same orange as submit. No words say it is the place. In a grayscale print, the border and the button are almost the same.",
                "The designer says the orange is already loud enough, so words are unnecessary."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "只把边框变成橙色，缺了什么？",
                  "zhHant": "只把邊框變成橙色，缺了什麼？",
                  "en": "A border that only turns orange is missing what?"
                },
                "options": [
                  {
                    "zh": "更饱和的橙色。",
                    "zhHant": "更飽和的橙色。",
                    "en": "A more saturated orange."
                  },
                  {
                    "zh": "把按钮也改成灰色，这样橙色就只剩边框。",
                    "zhHant": "把按鈕也改成灰色，這樣橙色就只剩邊框。",
                    "en": "Turning the button gray too, so orange remains only on the border."
                  },
                  {
                    "zh": "文字或图标。颜色不能是唯一信号，而且这橙色已经是动作的职务。",
                    "zhHant": "文字或圖標。顏色不能是唯一信號，而且這橙色已經是動作的職務。",
                    "en": "Words or an icon. Color cannot be the only signal, and this orange is already the action’s job."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 80,
                "prompt": {
                  "zh": "写出地点错误时，橙色以外的那条信号，并说明它为什么不会被看成第二个提交。",
                  "zhHant": "寫出地點錯誤時，橙色以外的那條信號，並說明它為什麼不會被看成第二個提交。",
                  "en": "Write the signal besides orange for an empty place, and say why it will not be read as a second submit."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "4.5 比 1 在这套系统里测的是哪一个职务？",
                  "zhHant": "4.5 比 1 在這套系統裡測的是哪一個職務？",
                  "en": "In this system, 4.5 to 1 tests which job?"
                },
                "options": [
                  {
                    "zh": "正文相对底色。职务分对了，对比不够，正文仍然失败。",
                    "zhHant": "正文相對底色。職務分對了，對比不夠，正文仍然失敗。",
                    "en": "Text against its ground. The jobs can be assigned, and if contrast fails the text job still fails."
                  },
                  {
                    "zh": "赞助商标志必须达到的亮度。",
                    "zhHant": "贊助商標誌必須達到的亮度。",
                    "en": "The brightness a sponsor’s logo must reach."
                  },
                  {
                    "zh": "动作色的饱和度。",
                    "zhHant": "動作色的飽和度。",
                    "en": "The saturation of the action color."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "滥用写在一张表上",
              "zhHant": "濫用寫在一張表上",
              "en": "Misuse is written on one sheet"
            },
            "concept": {
              "zh": [
                "一套颜色要附一张不能做的表：动作色不用来装饰，警告色不用来做标题，底色不用来写正文。没有这张表，下一张画面会重新发明。",
                "审查一个画面时，先问每种颜色在这一页的职务是不是系统里的那一个。多出来的用法就是缺陷，不是风格。",
                "改的时候一次只收回一个被滥用的职务。同时改所有颜色，就不知道哪一个职务曾经让人按错。"
              ],
              "zhHant": [
                "一套顏色要附一張不能做的表：動作色不用來裝飾，警告色不用來做標題，底色不用來寫正文。沒有這張表，下一張畫面會重新發明。",
                "審查一個畫面時，先問每種顏色在這一頁的職務是不是系統裡的那一個。多出來的用法就是缺陷，不是風格。",
                "改的時候一次只收回一個被濫用的職務。同時改所有顏色，就不知道哪一個職務曾經讓人按錯。"
              ],
              "en": [
                "A color system comes with a sheet of what it must not do: the action color is not decoration, the warning color is not a title, the ground color is not used to write text. Without that sheet, the next screen invents the jobs again.",
                "When you review a screen, first ask whether each color’s job on this page is the job in the system. An extra use is a defect, not a style.",
                "When you change it, take back one misused job at a time. Change every color at once, and you will not know which job made someone press the wrong thing."
              ]
            },
            "case": {
              "zh": [
                "下一页活动海报把橙色铺满标题，因为「这页需要能量」。提交按钮仍是橙色。错误提示也还是橙色。三处都说自己符合系统，因为系统里确实有橙色。",
                "系统里有橙色，只说明它有一个职务，不说明它可以做标题。"
              ],
              "zhHant": [
                "下一頁活動海報把橙色鋪滿標題，因為「這頁需要能量」。提交按鈕仍是橙色。錯誤提示也還是橙色。三處都說自己符合系統，因為系統裡確實有橙色。",
                "系統裡有橙色，只說明它有一個職務，不說明它可以做標題。"
              ],
              "en": [
                "The next event poster covers the title in orange because “this page needs energy.” Submit is still orange. The error is still orange. All three claim to follow the system, because the system does contain orange.",
                "Orange being in the system only means it has one job. It does not mean it may be a title."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "写这一页的一条缺陷：橙色多做了哪一个职务，你先收回哪一处。不要写能量。",
                  "zhHant": "寫這一頁的一條缺陷：橙色多做了哪一個職務，你先收回哪一處。不要寫能量。",
                  "en": "Write one defect on this page: which extra job orange took, and which place you take back first. Do not write energy."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "「系统里有橙色，所以标题可以用」错在哪？",
                  "zhHant": "「系統裡有橙色，所以標題可以用」錯在哪？",
                  "en": "What is wrong with “orange is in the system, so the title may use it”?"
                },
                "options": [
                  {
                    "zh": "系统里的颜色必须用在每一页的每一处。",
                    "zhHant": "系統裡的顏色必須用在每一頁的每一處。",
                    "en": "A color in the system must be used everywhere on every page."
                  },
                  {
                    "zh": "在系统里只说明它有一个职务，不说明它可以做标题。",
                    "zhHant": "在系統裡只說明它有一個職務，不說明它可以做標題。",
                    "en": "Being in the system only means it has one job. It does not mean it may be a title."
                  },
                  {
                    "zh": "标题不该有任何颜色。",
                    "zhHant": "標題不該有任何顏色。",
                    "en": "A title should not have any color."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "为什么一次只收回一个滥用？",
                  "zhHant": "為什麼一次只收回一個濫用？",
                  "en": "Why take back one misuse at a time?"
                },
                "options": [
                  {
                    "zh": "否则你不知道是哪一个职务让人按错。",
                    "zhHant": "否則你不知道是哪一個職務讓人按錯。",
                    "en": "Otherwise you do not know which job made someone press the wrong thing."
                  },
                  {
                    "zh": "因为一次改太多会超出颜料预算。",
                    "zhHant": "因為一次改太多會超出顏料預算。",
                    "en": "Because changing too much exceeds the pigment budget."
                  },
                  {
                    "zh": "因为其他滥用会自己消失。",
                    "zhHant": "因為其他濫用會自己消失。",
                    "en": "Because the other misuses disappear on their own."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "chart",
        "title": {
          "zh": "一张图只声称一个比较",
          "zhHant": "一張圖只聲稱一個比較",
          "en": "A chart claims one comparison"
        },
        "minutes": 40,
        "lessons": [
          {
            "title": {
              "zh": "条形的长度从零开始",
              "zhHant": "條形的長度從零開始",
              "en": "A bar’s length starts at zero"
            },
            "concept": {
              "zh": [
                "条形图用长度表示多少。长度不从零开始，眼睛会把一个很小的差看成很大。从九十八画到一百，百分之二会看起来像翻倍。",
                "折线看的是走势，有时可以不从零开始，但必须写明轴从哪里截断，而且只在你要声称的是变化、不是总量的时候。把条形也截断，是把长度这个编码拆掉。",
                "图比文字更先被相信。轴的起点是这个声称的一部分，不是装饰。"
              ],
              "zhHant": [
                "條形圖用長度表示多少。長度不從零開始，眼睛會把一個很小的差看成很大。從九十八畫到一百，百分之二會看起來像翻倍。",
                "折線看的是走勢，有時可以不從零開始，但必須寫明軸從哪裡截斷，而且只在你要聲稱的是變化、不是總量的時候。把條形也截斷，是把長度這個編碼拆掉。",
                "圖比文字更先被相信。軸的起點是這個聲稱的一部分，不是裝飾。"
              ],
              "en": [
                "A bar chart uses length for how much. If the length does not start at zero, the eye reads a small difference as a large one. Drawn from ninety-eight to one hundred, two percent can look like a doubling.",
                "A line is read for direction. It sometimes need not start at zero, but the axis has to say where it was cut, and only when the claim is the change, not the total. Cutting a bar as well breaks the length encoding.",
                "A chart is believed before the sentence. Where the axis starts is part of the claim, not decoration."
              ]
            },
            "case": {
              "zh": [
                "一张内部海报用条形比较两个月的完成率：上月百分之九十六，本月百分之九十八。轴从九十开始。本月的条几乎是上月的两倍高。标题写「大幅提升」。",
                "实际差是两个百分点。从零画，两条几乎一样长。"
              ],
              "zhHant": [
                "一張內部海報用條形比較兩個月的完成率：上月百分之九十六，本月百分之九十八。軸從九十開始。本月的條幾乎是上月的兩倍高。標題寫「大幅提升」。",
                "實際差是兩個百分點。從零畫，兩條几乎一樣長。"
              ],
              "en": [
                "An internal poster uses bars for two months of completion: ninety-six percent, then ninety-eight. The axis starts at ninety. This month’s bar is almost twice as tall. The title says “a large rise.”",
                "The actual difference is two points. Drawn from zero, the bars are almost the same length."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "这张条形图的问题是什么？",
                  "zhHant": "這張條形圖的問題是什麼？",
                  "en": "What is wrong with this bar chart?"
                },
                "options": [
                  {
                    "zh": "轴不从零开始，百分之二的差被长度说成了大幅提升。",
                    "zhHant": "軸不從零開始，百分之二的差被長度說成了大幅提升。",
                    "en": "The axis does not start at zero, so a two-point difference is told by the length as a large rise."
                  },
                  {
                    "zh": "百分之九十八不够高，应该画到一百以上。",
                    "zhHant": "百分之九十八不夠高，應該畫到一百以上。",
                    "en": "Ninety-eight is not high enough. It should be drawn past one hundred."
                  },
                  {
                    "zh": "条形图不能表示百分比。",
                    "zhHant": "條形圖不能表示百分比。",
                    "en": "A bar chart cannot show a percentage."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 80,
                "prompt": {
                  "zh": "写出这张图如果诚实，标题还能否说「大幅提升」。用两个百分点说明。",
                  "zhHant": "寫出這張圖如果誠實，標題還能否說「大幅提升」。用兩個百分點說明。",
                  "en": "Write whether an honest version of this chart can still be titled “a large rise.” Use the two points."
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "什么时候截断轴比较说得通？",
                  "zhHant": "什麼時候截斷軸比較說得通？",
                  "en": "When is a cut axis more defensible?"
                },
                "options": [
                  {
                    "zh": "任何时候，只要注明好看。",
                    "zhHant": "任何時候，只要註明好看。",
                    "en": "Whenever it is labeled as looking better."
                  },
                  {
                    "zh": "条形图想强调很小的差。",
                    "zhHant": "條形圖想強調很小的差。",
                    "en": "When a bar chart wants to emphasize a very small difference."
                  },
                  {
                    "zh": "折线要声称的是变化而不是总量，并且轴上写明从哪里截断。",
                    "zhHant": "折線要聲稱的是變化而不是總量，並且軸上寫明從哪裡截斷。",
                    "en": "When a line’s claim is the change rather than the total, and the axis says where it was cut."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "一张图只做一个声称",
              "zhHant": "一張圖只做一個聲稱",
              "en": "One chart, one claim"
            },
            "concept": {
              "zh": [
                "一张图只回答一个问题。八条线配一个图例，眼睛要来回翻译，声称就散了。直接把名字标在线上，比一个远处的图例更不容易配错。",
                "颜色在图里也是职务：同一系列始终同一种颜色。用颜色暗示不存在的排名，是额外的声称。颜色仍然不能是唯一的区分，类别还要有名字。",
                "没有单位、没有时间窗口的「上升百分之四十」不是声称。百分之四十相对于哪一个基数、哪一段时间，要写在图上，不写在讲解的人口中。"
              ],
              "zhHant": [
                "一張圖只回答一個問題。八條線配一個圖例，眼睛要來回翻譯，聲稱就散了。直接把名字標在線上，比一個遠處的圖例更不容易配錯。",
                "顏色在圖裡也是職務：同一系列始終同一種顏色。用顏色暗示不存在的排名，是額外的聲稱。顏色仍然不能是唯一的區分，類別還要有名字。",
                "沒有單位、沒有時間窗口的「上升百分之四十」不是聲稱。百分之四十相對於哪一個基數、哪一段時間，要寫在圖上，不寫在講解的人口中。"
              ],
              "en": [
                "One chart answers one question. Eight lines and a legend make the eye translate back and forth, and the claim scatters. A name sitting on the line is harder to mismatch than a legend far away.",
                "Color in a chart is also a job: one series keeps one color. Using color to imply a ranking that does not exist is an extra claim. Color still cannot be the only distinction. Categories also need names.",
                "“Up forty percent,” with no unit and no time window, is not a claim. Forty percent of which base, over which period, is written on the chart. It is not spoken only by the person presenting."
              ]
            },
            "case": {
              "zh": [
                "另一张图有八条颜色接近的线，图例在角落。标题是「参与上升百分之四十」。没有写相对于哪个月，也没有写这是人数还是次数。",
                "讲解的人用手指着最上面的一条说就是这个。离开讲解，图自己说不出。"
              ],
              "zhHant": [
                "另一張圖有八條顏色接近的線，圖例在角落。標題是「參與上升百分之四十」。沒有寫相對於哪個月，也沒有寫這是人數還是次數。",
                "講解的人用手指著最上面的一條說就是這個。離開講解，圖自己說不出。"
              ],
              "en": [
                "Another chart has eight lines of similar color, with the legend in a corner. The title is “engagement up forty percent.” It does not say against which month, or whether this is people or events.",
                "The presenter points at the top line and says this is the one. Away from the presenter, the chart cannot say it."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 100,
                "prompt": {
                  "zh": "把这张图收成一个声称：比较的是什么、基数是什么、时间窗口是什么。多出来的线该怎样处理。",
                  "zhHant": "把這張圖收成一個聲稱：比較的是什麼、基數是什麼、時間窗口是什麼。多出來的線該怎樣處理。",
                  "en": "Reduce this chart to one claim: what is compared, what the base is, and what the time window is. Say what happens to the extra lines."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "图例在角落、八条线颜色接近，首先的问题是什么？",
                  "zhHant": "圖例在角落、八條線顏色接近，首先的問題是什麼？",
                  "en": "A corner legend and eight similarly colored lines fail what first?"
                },
                "options": [
                  {
                    "zh": "图例的字体不是衬线。",
                    "zhHant": "圖例的字體不是襯線。",
                    "en": "The legend is not set in a serif."
                  },
                  {
                    "zh": "一张图有多个声称，而且离开讲解就配错系列。",
                    "zhHant": "一張圖有多個聲稱，而且離開講解就配錯系列。",
                    "en": "One chart carries several claims, and away from the presenter the series get mismatched."
                  },
                  {
                    "zh": "百分之四十太小，不值得画。",
                    "zhHant": "百分之四十太小，不值得畫。",
                    "en": "Forty percent is too small to draw."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "「上升百分之四十」还缺什么才成为一个声称？",
                  "zhHant": "「上升百分之四十」還缺什麼才成為一個聲稱？",
                  "en": "What is “up forty percent” still missing before it is a claim?"
                },
                "options": [
                  {
                    "zh": "相对于哪一个基数、哪一段时间，以及数的是人数还是次数。",
                    "zhHant": "相對於哪一個基數、哪一段時間，以及數的是人數還是次數。",
                    "en": "Against which base, over which period, and whether the count is people or events."
                  },
                  {
                    "zh": "一种更亮的颜色。",
                    "zhHant": "一種更亮的顏色。",
                    "en": "A brighter color."
                  },
                  {
                    "zh": "更多的系列，这样更完整。",
                    "zhHant": "更多的系列，這樣更完整。",
                    "en": "More series, so it is more complete."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "图要能离开讲解仍然成立",
              "zhHant": "圖要能離開講解仍然成立",
              "en": "The chart has to stand without the presenter"
            },
            "concept": {
              "zh": [
                "讲解的手指不是图的一部分。图上要有直接的标签、单位、轴的起点。人把图转发走之后，声称还在不在，是这张图完没完成的测试。",
                "如果你需要一句口头的「其实没有那么夸张」才能把截断的轴救回来，这张图就没有完成。把轴改回来，而不是把免责声明说得更快。",
                "一次只改最改变声称的那一处。先把条形的零点放回，再谈颜色好不好看。"
              ],
              "zhHant": [
                "講解的手指不是圖的一部分。圖上要有直接的標籤、單位、軸的起點。人把圖轉發走之後，聲稱還在不在，是這張圖完沒完成的測試。",
                "如果你需要一句口頭的「其實沒有那麼誇張」才能把截斷的軸救回來，這張圖就沒有完成。把軸改回來，而不是把免責聲明說得更快。",
                "一次只改最改變聲稱的那一處。先把條形的零點放回，再談顏色好不好看。"
              ],
              "en": [
                "The presenter’s finger is not part of the chart. The chart needs a direct label, a unit, and the axis start. After someone forwards the chart, whether the claim is still there is the test of whether the chart is done.",
                "If you need a spoken “it is not actually that dramatic” to rescue a cut axis, the chart is not done. Put the axis back. Do not say the disclaimer faster.",
                "Change the place that most alters the claim, one at a time. Put the bar’s zero back before you discuss whether the color is pleasing."
              ]
            },
            "case": {
              "zh": [
                "海报被转发到群里，没有讲解。标题仍是大幅提升。有人回复：那我们这个月的目标已经几乎翻倍，可以少排班。",
                "两个百分点被一个截断的轴变成了排班决定。"
              ],
              "zhHant": [
                "海報被轉發到群裡，沒有講解。標題仍是大幅提升。有人回覆：那我們這個月的目標已經幾乎翻倍，可以少排班。",
                "兩個百分點被一個截斷的軸變成了排班決定。"
              ],
              "en": [
                "The poster is forwarded to a chat, with no presenter. The title still says a large rise. Someone replies that this month’s target has almost doubled, so fewer people need to be scheduled.",
                "Two points, through a cut axis, became a staffing decision."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "写你先改的一处，让这张图离开讲解也不会导出少排班。不要先改颜色。",
                  "zhHant": "寫你先改的一處，讓這張圖離開講解也不會導出少排班。不要先改顏色。",
                  "en": "Write the one place you change first so the chart, without a presenter, no longer produces fewer staff. Do not start with the color."
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "哪一个测试说明这张图没有完成？",
                  "zhHant": "哪一個測試說明這張圖沒有完成？",
                  "en": "Which test shows the chart is not done?"
                },
                "options": [
                  {
                    "zh": "讲解时有人点头。",
                    "zhHant": "講解時有人點頭。",
                    "en": "People nod while it is presented."
                  },
                  {
                    "zh": "转发后颜色仍然好看。",
                    "zhHant": "轉發後顏色仍然好看。",
                    "en": "After it is forwarded, the color is still pleasing."
                  },
                  {
                    "zh": "没有讲解时，一个截断的轴导出了错误的决定。",
                    "zhHant": "沒有講解時，一個截斷的軸導出了錯誤的決定。",
                    "en": "Without a presenter, a cut axis produced the wrong decision."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "口头说「其实只是两个百分点」为什么不够？",
                  "zhHant": "口頭說「其實只是兩個百分點」為什麼不夠？",
                  "en": "Why is saying “it is actually only two points” not enough?"
                },
                "options": [
                  {
                    "zh": "因为图被转发之后，这句话不在图上。",
                    "zhHant": "因為圖被轉發之後，這句話不在圖上。",
                    "en": "Because after the chart is forwarded, that sentence is not on the chart."
                  },
                  {
                    "zh": "因为两个百分点不能说出口。",
                    "zhHant": "因為兩個百分點不能說出口。",
                    "en": "Because two points cannot be spoken aloud."
                  },
                  {
                    "zh": "因为折线图禁止任何口头说明。",
                    "zhHant": "因為折線圖禁止任何口頭說明。",
                    "en": "Because a line chart forbids any spoken explanation."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "anquan": {
    "courses": [
      {
        "id": "identity",
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
              "zhHant": "秘密、腳本，和最小權限",
              "en": "Secrets, scripts, and least privilege"
            },
            "concept": {
              "zh": [
                "写在 HTML 注释里的口令会随着页面送到浏览器。查看源代码的人看得到。在你删掉注释之前，它已经算交出去的了。秘密放在运行时才能取到的地方，不放进会交给读者的文档。",
                "失物描述如果按 HTML 插入，下一位读者的浏览器就会执行里面的脚本。描述作为文字插入，脚本就只是字。这一项和「浏览器里的检查不是记录」是同一条边界：读者收到的是文字，不是别人的程序。",
                "最小权限是：一个人只拿到做这件事所必需的能力。义工可以新增一条失物。导出全部电话是另一件能力，留给办公处的账号。共用一个管理员口令时，你既给多了能力，也无法在事后说是谁做的。那同时伤到机密性和完整性。"
              ],
              "zhHant": [
                "寫在 HTML 註釋裡的口令會隨著頁面送到瀏覽器。查看源代碼的人看得到。在你刪掉註釋之前，它已經算交出去的了。秘密放在運行時才能取到的地方，不放進會交給讀者的文檔。",
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
                  "zhHant": "註釋裡的口令為什麼已經不算秘密？",
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
      },
      {
        "id": "incident",
        "title": {
          "zh": "出事以后先拦住，再恢复",
          "zhHant": "出事以後先攔住，再恢復",
          "en": "After an incident, contain first, then recover"
        },
        "minutes": 45,
        "lessons": [
          {
            "title": {
              "zh": "日志记下决定，不记下秘密",
              "zhHant": "日誌記下決定，不記下秘密",
              "en": "A log records the decision, not the secret"
            },
            "concept": {
              "zh": [
                "日志是为了事后能回答：谁，对哪一条记录，做了什么，何时，成功还是被拒绝。答不出这五样，你就无法说这次出事到了哪里。",
                "日志里不放口令、验证码、整段电话名单。日志是另一份会被人读的副本。把秘密写进日志，等于又交出去一次。",
                "共享的管理员账号会让「谁」这一栏永远是同一个人。那不是日志坏了，是你在写入之前就失去了谁。"
              ],
              "zhHant": [
                "日誌是為了事後能回答：誰，對哪一條記錄，做了什麼，何時，成功還是被拒絕。答不出這五樣，你就無法說這次出事到了哪裡。",
                "日誌裡不放口令、驗證碼、整段電話名單。日誌是另一份會被人讀的副本。把秘密寫進日誌，等於又交出去一次。",
                "共享的管理員賬號會讓「誰」這一欄永遠是同一個人。那不是日誌壞了，是你在寫入之前就失去了誰。"
              ],
              "en": [
                "A log exists so that afterward you can answer: who, which record, what they did, when, and whether it succeeded or was refused. If you cannot answer those five, you cannot say how far this incident went.",
                "The log does not hold a password, a verification code, or the whole list of phone numbers. A log is another copy people will read. Writing the secret into the log hands it out again.",
                "A shared administrator account makes the “who” column the same person forever. That is not a broken log. You lost the who before anything was written."
              ]
            },
            "case": {
              "zh": [
                "义工导出了全部电话。日志只有一条：admin 在某个时间下载了文件。没有哪一个义工，也没有导出的是不是全部。文件的副本被发到群里。",
                "有人提议把验证码也记进日志，方便核对是谁收到的。那会把一次证明再复制一份。"
              ],
              "zhHant": [
                "義工導出了全部電話。日誌只有一條：admin 在某個時間下載了文件。沒有哪一個義工，也沒有導出的是不是全部。文件的副本被髮到群裡。",
                "有人提議把驗證碼也記進日誌，方便核對是誰收到的。那會把一次證明再複製一份。"
              ],
              "en": [
                "A volunteer exported every phone number. The log has one line: admin downloaded a file at a time. It does not say which volunteer, or whether the export was everyone. A copy of the file was sent to a chat.",
                "Someone proposes logging verification codes too, to check who received them. That copies a proof a second time."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 100,
                "prompt": {
                  "zh": "写出这条导出日志本该有的五样里，现在缺哪几样。并说明为什么不能把验证码补进日志。",
                  "zhHant": "寫出這條導出日誌本該有的五樣裡，現在缺哪幾樣。並說明為什麼不能把驗證碼補進日誌。",
                  "en": "Write which of the five facts this export log is missing. Also say why a verification code cannot be added to fill the gap."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "为什么「admin 下载了文件」不足以说明出事到了哪里？",
                  "zhHant": "為什麼「admin 下載了文件」不足以說明出事到了哪裡？",
                  "en": "Why is “admin downloaded a file” not enough to say how far it went?"
                },
                "options": [
                  {
                    "zh": "因为时间没有精确到毫秒。",
                    "zhHant": "因為時間沒有精確到毫秒。",
                    "en": "Because the time is not exact to the millisecond."
                  },
                  {
                    "zh": "因为谁是同一个人，也看不出是不是全部电话，群里的副本就无法对上某一次决定。",
                    "zhHant": "因為誰是同一個人，也看不出是不是全部電話，群裡的副本就無法對上某一次決定。",
                    "en": "Because the who is a single shared name, and it does not show whether every phone number left, so the copy in the chat cannot be matched to one decision."
                  },
                  {
                    "zh": "因为下载本身不是动作。",
                    "zhHant": "因為下載本身不是動作。",
                    "en": "Because a download is not an action."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "共享管理员账号对日志的伤害是什么？",
                  "zhHant": "共享管理員賬號對日誌的傷害是什麼？",
                  "en": "What does a shared administrator account do to the log?"
                },
                "options": [
                  {
                    "zh": "在写入之前就失去了谁。日志无法事后发明这个人。",
                    "zhHant": "在寫入之前就失去了誰。日誌無法事後發明這個人。",
                    "en": "You lose the who before anything is written. The log cannot invent that person afterward."
                  },
                  {
                    "zh": "它会自动把口令写成明文。",
                    "zhHant": "它會自動把口令寫成明文。",
                    "en": "It automatically writes the password in clear text."
                  },
                  {
                    "zh": "它让日志变得太长。",
                    "zhHant": "它讓日誌變得太長。",
                    "en": "It makes the log too long."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "先拦住，再查多远，再恢复",
              "zhHant": "先攔住，再查多遠，再恢復",
              "en": "Contain, then see how far, then recover"
            },
            "concept": {
              "zh": [
                "出事先分类它伤的是哪一项，然后拦住：停掉还在流出的那一个动作。导出还开着，就先关掉导出、作废那一次会话。先写一封「我们很重视安全」而不关掉出口，流出还在继续。",
                "拦住之后才查多远：谁拿到了文件，哪些电话，从何时到何时。查的时候不要把验证码和口令再抄进新的文档。",
                "恢复是让该用的人重新用得上，并换掉已经暴露的凭证。在不知道流出了什么之前宣布已经全部安全，是把可用性的承诺说在事实前面。"
              ],
              "zhHant": [
                "出事先分類它傷的是哪一項，然後攔住：停掉還在流出的那一個動作。導出還開著，就先關掉導出、作廢那一次會話。先寫一封「我們很重視安全」而不關掉出口，流出還在繼續。",
                "攔住之後才查多遠：誰拿到了文件，哪些電話，從何時到何時。查的時候不要把驗證碼和口令再抄進新的文檔。",
                "恢復是讓該用的人重新用得上，並換掉已經暴露的憑證。在不知道流出了什麼之前宣佈已經全部安全，是把可用性的承諾說在事實前面。"
              ],
              "en": [
                "Name which property the incident harmed, then contain it: stop the action that is still leaking. If export is still open, close export and end that session first. A letter that says “we take security seriously,” while the exit stays open, lets the leak continue.",
                "After it is contained, see how far: who received the file, which numbers, from when until when. While you look, do not copy codes and passwords into a new document.",
                "Recovery means the people who should use it can use it again, and the credential that was exposed is replaced. Announcing that everything is safe before you know what left puts a promise of availability ahead of the facts."
              ]
            },
            "case": {
              "zh": [
                "发现群里的文件时，导出按钮还开着，共享账号的会话也还在。有人花了一小时写公告，说事件已处理、页面下午恢复。这段时间里，同一个会话又导出了一次。",
                "公告没有说哪些电话离开了，也没有作废会话。"
              ],
              "zhHant": [
                "發現群裡的文件時，導出按鈕還開著，共享賬號的會話也還在。有人花了一小時寫公告，說事件已處理、頁面下午恢復。這段時間裡，同一個會話又導出了一次。",
                "公告沒有說哪些電話離開了，也沒有作廢會話。"
              ],
              "en": [
                "When the file is found in the chat, the export button is still on, and the shared account’s session is still alive. Someone spends an hour on a notice saying the incident is handled and the page will return in the afternoon. During that hour the same session exports again.",
                "The notice does not say which numbers left, and it does not end the session."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "下一小时最先做哪一件？",
                  "zhHant": "下一小時最先做哪一件？",
                  "en": "What is the first thing in the next hour?"
                },
                "options": [
                  {
                    "zh": "关掉导出，并作废那个还活着的会话。",
                    "zhHant": "關掉導出，並作廢那個還活著的會話。",
                    "en": "Turn export off, and end the session that is still alive."
                  },
                  {
                    "zh": "把公告写得更诚恳。",
                    "zhHant": "把公告寫得更誠懇。",
                    "en": "Make the notice more sincere."
                  },
                  {
                    "zh": "把验证码记进日志以便核对。",
                    "zhHant": "把驗證碼記進日誌以便核對。",
                    "en": "Write verification codes into the log so they can be checked."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 100,
                "prompt": {
                  "zh": "按顺序写三步：拦住什么、要查清的多远是什么、恢复时哪一个凭证必须换掉。不要先写公告。",
                  "zhHant": "按順序寫三步：攔住什麼、要查清的多遠是什麼、恢復時哪一個憑證必須換掉。不要先寫公告。",
                  "en": "In order, write three steps: what you contain, how far you still have to see, and which credential recovery must replace. Do not start with the notice."
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "为什么「已经全部安全」说早了？",
                  "zhHant": "為什麼「已經全部安全」說早了？",
                  "en": "Why is “everything is already safe” too early?"
                },
                "options": [
                  {
                    "zh": "因为公告的字体还没定。",
                    "zhHant": "因為公告的字體還沒定。",
                    "en": "Because the notice’s typeface is not chosen yet."
                  },
                  {
                    "zh": "因为下午才是恢复的合法时间。",
                    "zhHant": "因為下午才是恢復的合法時間。",
                    "en": "Because afternoon is the only legal time to recover."
                  },
                  {
                    "zh": "因为出口还开着，你还不知道哪些电话离开了。",
                    "zhHant": "因為出口還開著，你還不知道哪些電話離開了。",
                    "en": "Because the exit is still open, and you do not yet know which numbers left."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "换掉暴露的凭证，并留下一道下次会慢一点的控制",
              "zhHant": "換掉暴露的憑證，並留下一道下次會慢一點的控制",
              "en": "Replace the exposed credential, and leave one control that would slow the next time"
            },
            "concept": {
              "zh": [
                "暴露过的口令或令牌，删掉文件并不使它失效。先在发出它的地方作废，再换新的。清理历史是之后的事，不能代替作废。",
                "复盘只留一道下次会让同一件事更慢的控制。这次如果是共享账号，那一道就是每个人自己的账号，导出只留在办公处。不要同时许诺十道，一道没做完。",
                "告诉受影响的人时，说的是哪些记录、哪一段时间，而不是一句空的重视。说不出范围，就还没有查完多远。"
              ],
              "zhHant": [
                "暴露過的口令或令牌，刪掉文件並不使它失效。先在發出它的地方作廢，再換新的。清理歷史是之後的事，不能代替作廢。",
                "覆盤只留一道下次會讓同一件事更慢的控制。這次如果是共享賬號，那一道就是每個人自己的賬號，導出只留在辦公處。不要同時許諾十道，一道沒做完。",
                "告訴受影響的人時，說的是哪些記錄、哪一段時間，而不是一句空的重視。說不出範圍，就還沒有查完多遠。"
              ],
              "en": [
                "A password or token that has been exposed is not made dead by deleting the file. Revoke it where it was issued, then replace it. Cleaning history comes later. It does not substitute for revocation.",
                "The review leaves one control that would make the same thing slower next time. If this one was a shared account, that control is an account per person, with export kept at the office. Do not promise ten controls. One unfinished control is none.",
                "When you tell the people affected, you say which records and which period, not an empty sentence about taking it seriously. If you cannot say the scope, you have not yet seen how far it went."
              ]
            },
            "case": {
              "zh": [
                "有人把共享口令从页面上删了，认为事件结束。口令在聊天记录和旧的导出文件里仍能登录。新的导出没有换账号。",
                "给学生的信只写：我们非常重视安全，详情随后。没有时间范围。"
              ],
              "zhHant": [
                "有人把共享口令從頁面上刪了，認為事件結束。口令在聊天記錄和舊的導出文件裡仍能登入。新的導出沒有換賬號。",
                "給學生的信只寫：我們非常重視安全，詳情隨後。沒有時間範圍。"
              ],
              "en": [
                "Someone deletes the shared password from the page and calls the incident over. The password still signs in from the chat history and the old export file. The new export did not change accounts.",
                "The letter to students only says: we take security very seriously, details later. There is no time range."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 110,
                "prompt": {
                  "zh": "写出作废这个口令要在哪里做，以及你只留的那一道下次控制。删掉页面上的字为什么不算结束。",
                  "zhHant": "寫出作廢這個口令要在哪裡做，以及你只留的那一道下次控制。刪掉頁面上的字為什麼不算結束。",
                  "en": "Write where this password has to be revoked, and the one control you will leave for next time. Say why deleting the words on the page is not the end."
                }
              },
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "为什么先删仓库或页面，不足够？",
                  "zhHant": "為什麼先刪倉庫或頁面，不足夠？",
                  "en": "Why is deleting it from the repo or the page not enough?"
                },
                "options": [
                  {
                    "zh": "因为删除会让日志变短。",
                    "zhHant": "因為刪除會讓日誌變短。",
                    "en": "Because deletion makes the log shorter."
                  },
                  {
                    "zh": "因为副本还在，口令在作废之前仍然能登录。",
                    "zhHant": "因為副本還在，口令在作廢之前仍然能登入。",
                    "en": "Because copies remain, and the password can still sign in until it is revoked."
                  },
                  {
                    "zh": "因为页面删除会自动作废所有会话。",
                    "zhHant": "因為頁面刪除會自動作廢所有會話。",
                    "en": "Because deleting it on the page automatically ends every session."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "给学生的信现在还缺什么？",
                  "zhHant": "給學生的信現在還缺什麼？",
                  "en": "What is the letter to students still missing?"
                },
                "options": [
                  {
                    "zh": "哪些记录、哪一段时间。说不出范围，就是还没查完多远。",
                    "zhHant": "哪些記錄、哪一段時間。說不出範圍，就是還沒查完多遠。",
                    "en": "Which records, and which period. If you cannot say the scope, you have not seen how far it went."
                  },
                  {
                    "zh": "更多的重视。",
                    "zhHant": "更多的重視。",
                    "en": "More seriousness."
                  },
                  {
                    "zh": "共享口令本身，方便他们自己检查。",
                    "zhHant": "共享口令本身，方便他們自己檢查。",
                    "en": "The shared password itself, so they can check it."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "supply",
        "title": {
          "zh": "依赖和令牌都是你交出去的能力",
          "zhHant": "依賴和令牌都是你交出去的能力",
          "en": "A dependency and a token are capabilities you hand over"
        },
        "minutes": 40,
        "lessons": [
          {
            "title": {
              "zh": "依赖是你没写、但会运行的代码",
              "zhHant": "依賴是你沒寫、但會運行的代碼",
              "en": "A dependency is code you did not write that still runs"
            },
            "concept": {
              "zh": [
                "一个依赖是别人的代码，跟着你的页面一起运行。它能读到什么、能把什么送去哪里，就是你交给它的能力。说不出它送出什么，就不要加。",
                "锁文件记下确切的版本。写「最新」等于把今天安装到的那一版留在某个人的电脑上，下一次安装可以是另一版。你无法重复那一次构建。",
                "版本号本身不是审查。审查的是这版代码多了哪一种能力：它是否在提交时把电话送到另一个主机。"
              ],
              "zhHant": [
                "一個依賴是別人的代碼，跟著你的頁面一起運行。它能讀到什麼、能把什麼送去哪裡，就是你交給它的能力。說不出它送出什麼，就不要加。",
                "鎖文件記下確切的版本。寫「最新」等於把今天安裝到的那一版留在某個人的電腦上，下一次安裝可以是另一版。你無法重複那一次構建。",
                "版本號本身不是審查。審查的是這版代碼多了哪一種能力：它是否在提交時把電話送到另一個主機。"
              ],
              "en": [
                "A dependency is someone else’s code that runs with your page. What it can read, and where it can send it, is the capability you handed it. If you cannot say what it sends, do not add it.",
                "A lockfile records the exact version. Writing “latest” leaves whatever was installed today on one computer. The next install can be another version. You cannot repeat that build.",
                "The version number is not the review. The review is which capability this version adds: whether, on submit, it sends the phone number to another host."
              ]
            },
            "case": {
              "zh": [
                "学生加了一个「更好看的表单」包，说明是「更新依赖」。没有锁文件。这个包在提交时把电话字段发到包作者的主机。",
                "下周另一台电脑安装到的「最新」已经是另一个版本，发送的字段又多了地点。"
              ],
              "zhHant": [
                "學生加了一個「更好看的表單」包，說明是「更新依賴」。沒有鎖文件。這個包在提交時把電話字段發到包作者的主機。",
                "下週另一台電腦安裝到的「最新」已經是另一個版本，發送的字段又多了地點。"
              ],
              "en": [
                "A student adds a “better-looking form” package. The message says “update dependencies.” There is no lockfile. On submit, the package sends the phone field to the package author’s host.",
                "Next week another computer’s “latest” is a different version, and the place field is sent as well."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "加这个包之前，必须说得清什么？",
                  "zhHant": "加這個包之前，必須說得清什麼？",
                  "en": "Before adding this package, what must you be able to say?"
                },
                "options": [
                  {
                    "zh": "它的星星数够不够多。",
                    "zhHant": "它的星星數夠不夠多。",
                    "en": "Whether it has enough stars."
                  },
                  {
                    "zh": "它的名字好不好听。",
                    "zhHant": "它的名字好不好聽。",
                    "en": "Whether its name sounds good."
                  },
                  {
                    "zh": "提交时它把哪些字段送到哪里。说不出，就不加。",
                    "zhHant": "提交時它把哪些字段送到哪裡。說不出，就不加。",
                    "en": "Which fields it sends, and where, on submit. If you cannot say it, you do not add it."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "说明没有锁文件时，为什么下一台电脑会把地点也送出去，以及锁文件挡住的是哪一种变化。",
                  "zhHant": "說明沒有鎖文件時，為什麼下一臺電腦會把地點也送出去，以及鎖文件擋住的是哪一種變化。",
                  "en": "Explain why, without a lockfile, the next computer also sends the place, and which kind of change a lockfile stops."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "「最新」为什么不是一个决定？",
                  "zhHant": "「最新」為什麼不是一個決定？",
                  "en": "Why is “latest” not a decision?"
                },
                "options": [
                  {
                    "zh": "因为下一次安装可以是另一版，你无法重复这一次构建。",
                    "zhHant": "因為下一次安裝可以是另一版，你無法重複這一次構建。",
                    "en": "Because the next install can be another version. You cannot repeat this build."
                  },
                  {
                    "zh": "因为最新一定最安全。",
                    "zhHant": "因為最新一定最安全。",
                    "en": "Because latest is always the safest."
                  },
                  {
                    "zh": "因为包管理器不允许固定版本。",
                    "zhHant": "因為包管理器不允許固定版本。",
                    "en": "Because a package manager does not allow a fixed version."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "令牌一旦进了仓库，就已经交出去",
              "zhHant": "令牌一旦進了倉庫，就已經交出去",
              "en": "A token that entered the repository has already been handed out"
            },
            "concept": {
              "zh": [
                "令牌、口令写进仓库的那一次推送，就已经交给了每一个能拉这份历史的人，也交给了会扫描公开历史的程序。删掉最新的那一笔，旧的提交还在。",
                "先在发出令牌的地方作废，再换一个新的，放在运行时才能取到的地方，不放回文件。清理历史是第二步，而且做不到让已经复制走的那一份消失。",
                "这和写在 HTML 注释里是不同的位置：注释跟着页面，令牌跟着仓库的历史。两处都是交出去，都不是删掉字就结束。"
              ],
              "zhHant": [
                "令牌、口令寫進倉庫的那一次推送，就已經交給了每一個能拉這份歷史的人，也交給了會掃描公開歷史的程序。刪掉最新的那一筆，舊的提交還在。",
                "先在發出令牌的地方作廢，再換一個新的，放在運行時才能取到的地方，不放回文件。清理歷史是第二步，而且做不到讓已經複製走的那一份消失。",
                "這和寫在 HTML 註釋裡是不同的位置：註釋跟著頁面，令牌跟著倉庫的歷史。兩處都是交出去，都不是刪掉字就結束。"
              ],
              "en": [
                "The push that writes a token or a password into the repository has already handed it to everyone who can pull that history, and to programs that scan public history. Deleting the latest commit leaves the older one.",
                "Revoke it where it was issued, then replace it, somewhere the running system can fetch it, not back in the file. Cleaning history is the second step, and it cannot make a copy that already left disappear.",
                "This is a different place from an HTML comment: the comment travels with the page, the token travels with the repository history. Both are handing it out. Neither ends when the letters are deleted."
              ]
            },
            "case": {
              "zh": [
                "学生把地图服务的令牌写在脚本里并推送，随后删掉该文件再推一次，认为已经收回。旧提交里令牌还在。第二天有人用它请求了地图额度。",
                "他没有在地图服务那里作废这个令牌。"
              ],
              "zhHant": [
                "學生把地圖服務的令牌寫在腳本里並推送，隨後刪掉該文件再推一次，認為已經收回。舊提交裡令牌還在。第二天有人用它請求了地圖額度。",
                "他沒有在地圖服務那裡作廢這個令牌。"
              ],
              "en": [
                "A student writes a map service’s token into a script and pushes, then deletes the file and pushes again, believing it is reclaimed. The token is still in the old commit. The next day someone uses it to spend the map quota.",
                "He did not revoke the token at the map service."
              ]
            },
            "tasks": [
              {
                "kind": "check",
                "answer": 1,
                "prompt": {
                  "zh": "删掉文件再推一次，为什么令牌还在？",
                  "zhHant": "刪掉文件再推一次，為什麼令牌還在？",
                  "en": "Why is the token still there after the file is deleted and pushed again?"
                },
                "options": [
                  {
                    "zh": "因为推送会自动作废令牌。",
                    "zhHant": "因為推送會自動作廢令牌。",
                    "en": "Because a push automatically revokes the token."
                  },
                  {
                    "zh": "因为旧提交还在历史里，能拉这份历史的人仍看得到。",
                    "zhHant": "因為舊提交還在歷史裡，能拉這份歷史的人仍看得到。",
                    "en": "Because the old commit is still in the history. Anyone who can pull that history can still see it."
                  },
                  {
                    "zh": "因为令牌太短，删除需要两次。",
                    "zhHant": "因為令牌太短，刪除需要兩次。",
                    "en": "Because the token is short, so deletion takes two tries."
                  }
                ]
              },
              {
                "kind": "write",
                "min": 90,
                "prompt": {
                  "zh": "按顺序写你要做的两步：先在哪里作废，新令牌放在哪里。不要把新令牌写回脚本。",
                  "zhHant": "按順序寫你要做的兩步：先在哪裡作廢，新令牌放在哪裡。不要把新令牌寫回腳本。",
                  "en": "In order, write the two steps: where you revoke it first, and where the new token lives. Do not write the new token back into the script."
                }
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "这和 HTML 注释里的口令，相同点是什么？",
                  "zhHant": "這和 HTML 註釋裡的口令，相同點是什麼？",
                  "en": "What does this share with a password in an HTML comment?"
                },
                "options": [
                  {
                    "zh": "两处都是已经交出去的副本，删掉字都不等于作废。",
                    "zhHant": "兩處都是已經交出去的副本，刪掉字都不等於作廢。",
                    "en": "Both are copies already handed out. Deleting the letters is not revocation."
                  },
                  {
                    "zh": "两处都只有组员看得到。",
                    "zhHant": "兩處都只有組員看得到。",
                    "en": "Only teammates can see either one."
                  },
                  {
                    "zh": "注释比仓库更危险，所以仓库可以后处理。",
                    "zhHant": "註釋比倉庫更危險，所以倉庫可以後處理。",
                    "en": "A comment is more dangerous than a repository, so the repository can wait."
                  }
                ]
              }
            ]
          },
          {
            "title": {
              "zh": "审查依赖时看它多出来的能力",
              "zhHant": "審查依賴時看它多出來的能力",
              "en": "Review a dependency for the capability it adds"
            },
            "concept": {
              "zh": [
                "一次依赖的审查只问一个问题：它多了哪种能力，这种能力是不是这页的工作需要的。失物页不需要一个会把电话送到别处的表单皮肤。好看不是能力的理由。",
                "审查意见要写出它发送的主机和字段。写「包很流行」没有检查能力。",
                "合进主线之前，锁文件要在，令牌不能在文件里。缺任何一件，这轮就不结束。"
              ],
              "zhHant": [
                "一次依賴的審查只問一個問題：它多了哪種能力，這種能力是不是這頁的工作需要的。失物頁不需要一個會把電話送到別處的表單皮膚。好看不是能力的理由。",
                "審查意見要寫出它發送的主機和字段。寫「包很流行」沒有檢查能力。",
                "合進主線之前，鎖文件要在，令牌不能在文件裡。缺任何一件，這輪就不結束。"
              ],
              "en": [
                "A review of a dependency asks one question: which capability it adds, and whether this page’s job needs that capability. The lost-and-found does not need a form skin that sends the phone number elsewhere. Looking better is not a reason for a capability.",
                "The review comment names the host and the fields it sends. “The package is popular” did not check the capability.",
                "Before it reaches the main line, the lockfile is there, and the token is not in a file. If either is missing, the round is not finished."
              ]
            },
            "case": {
              "zh": [
                "审查写了「可以，这个表单更好看」。没有写它把电话送到哪个主机。锁文件没有提交。地图令牌仍在旧历史里没有作废。",
                "主线从此每次提交都把电话再送出去一次。"
              ],
              "zhHant": [
                "審查寫了「可以，這個表單更好看」。沒有寫它把電話送到哪個主機。鎖文件沒有提交。地圖令牌仍在舊歷史裡沒有作廢。",
                "主線從此每次提交都把電話再送出去一次。"
              ],
              "en": [
                "The review says “approved, this form looks better.” It does not say which host receives the phone number. The lockfile is not committed. The map token is still in the old history, not revoked.",
                "From then on, every submit on the main line sends the phone number out again."
              ]
            },
            "tasks": [
              {
                "kind": "write",
                "min": 110,
                "prompt": {
                  "zh": "写一条审查：这个包多出来的能力是什么，为什么失物页不需要，以及主线还缺哪两件才算结束。",
                  "zhHant": "寫一條審查：這個包多出來的能力是什麼，為什麼失物頁不需要，以及主線還缺哪兩件才算結束。",
                  "en": "Write a review: which capability this package adds, why the lost-and-found does not need it, and which two things are still missing before the main line is done."
                }
              },
              {
                "kind": "check",
                "answer": 2,
                "prompt": {
                  "zh": "「包很流行」为什么不是审查？",
                  "zhHant": "「包很流行」為什麼不是審查？",
                  "en": "Why is “the package is popular” not a review?"
                },
                "options": [
                  {
                    "zh": "因为流行的包不能上锁。",
                    "zhHant": "因為流行的包不能上鎖。",
                    "en": "Because a popular package cannot be locked."
                  },
                  {
                    "zh": "因为流行度会自动作废令牌。",
                    "zhHant": "因為流行度會自動作廢令牌。",
                    "en": "Because popularity automatically revokes tokens."
                  },
                  {
                    "zh": "因为它没有写出送出的字段和主机。",
                    "zhHant": "因為它沒有寫出送出的字段和主機。",
                    "en": "Because it does not name the fields and the host that are sent."
                  }
                ]
              },
              {
                "kind": "check",
                "answer": 0,
                "prompt": {
                  "zh": "主线现在每次提交都送出电话。这轮审查结束了吗？",
                  "zhHant": "主線現在每次提交都送出電話。這輪審查結束了嗎？",
                  "en": "The main line now sends the phone number on every submit. Is this review round finished?"
                },
                "options": [
                  {
                    "zh": "没有。能力还在，锁文件和令牌的作废也都还没完成。",
                    "zhHant": "沒有。能力還在，鎖文件和令牌的作廢也都還沒完成。",
                    "en": "No. The capability is still there, and the lockfile and the token’s revocation are not done either."
                  },
                  {
                    "zh": "结束了。因为已经写了可以。",
                    "zhHant": "結束了。因為已經寫了可以。",
                    "en": "Yes. Because someone already wrote approved."
                  },
                  {
                    "zh": "结束了。更好看就是这页需要的能力。",
                    "zhHant": "結束了。更好看就是這頁需要的能力。",
                    "en": "Yes. Looking better is the capability this page needs."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
