const biblicalThemes = [
  {
    theme: "Trinity",
    references: ["1-3", "1-4", "4-2", "5-6", "16-5", "28-2", "36-2", "36-5", "39-4"]
  },
  {
    theme: "Incarnation",
    references: ["1-1", "4-1", "26-1", "29-1", "30-1", "42-1", "50-3"]
  },
  {
    theme: "Divinity of Christ",
    references: ["1-1", "2-1", "16-2", "16-3", "22-2", "24-1", "25-6", "28-5", "42-3", "43-5", "48-5"]
  },
  {
    theme: "Humanity of Christ",
    references: ["4-2", "12-1", "18-1", "32-2", "42-1", "43-5"]
  },
  {
    theme: "Crucifixion",
    references: ["5-4", "5-5", "8-1", "23-3", "32-1", "32-2", "45-1", "45-2", "45-3", "50-4"]
  },
  {
    theme: "Resurrection",
    references: ["6-6", "16-5", "29-6", "30-5", "46-1", "47-1", "47-2", "47-3", "47-5", "48-3", "48-4", "48-5", "50-5"]
  },
  {
    theme: "Atonement",
    references: ["5-4", "8-2", "23-3", "43-6", "45-2", "50-4"]
  },
  {
    theme: "Salvation",
    references: ["3-5", "9-5", "9-6", "10-1", "14-5", "19-2", "19-5", "50-3", "50-6"]
  },
  {
    theme: "New Birth",
    references: ["3-5", "9-3", "9-4", "9-5", "12-4", "25-1"]
  },
  {
    theme: "I AM (Divine Name)",
    references: ["20-7", "24-1", "25-6", "37-1", "42-3"]
  },
  {
    theme: "Bread of Life",
    references: ["19-1", "19-4", "19-6", "20-7", "37-1"]
  },
  {
    theme: "Light of the World",
    references: ["2-4", "24-2", "37-1", "38-4"]
  },
  {
    theme: "Good Shepherd",
    references: ["27-2", "27-3", "37-1"]
  },
  {
    theme: "Resurrection and Life",
    references: ["29-6", "37-1"]
  },
  {
    theme: "Way, Truth, and Life",
    references: ["35-3", "37-1", "43-6"]
  },
  {
    theme: "The Vine",
    references: ["37-2"]
  },
  {
    theme: "The Door",
    references: ["27-5", "37-1"]
  },
  {
    theme: "Work of the Holy Spirit",
    references: ["5-6", "22-3", "36-1", "36-5", "39-4", "39-5"]
  },
  {
    theme: "Holy Spirit Coming",
    references: ["22-5", "36-4"]
  },
  {
    theme: "Holy Spirit Indwelling",
    references: ["12-4", "22-5", "35-2"]
  },
  {
    theme: "Human Sinfulness",
    references: ["2-2", "3-1", "3-3", "10-3", "15-5", "26-6", "34-3", "50-2"]
  },
  {
    theme: "Slavery to Sin",
    references: ["26-6", "50-2"]
  },
  {
    theme: "Spiritual Death",
    references: ["16-4", "16-5"]
  },
  {
    theme: "Darkness",
    references: ["2-4", "3-1", "10-4", "38-4"]
  },
  {
    theme: "Nature of Faith",
    references: ["11-5", "14-4", "14-5", "19-2", "25-2", "30-4", "37-2"]
  },
  {
    theme: "Call to Believe",
    references: ["20-3", "47-6", "48-6"]
  },
  {
    theme: "Abiding in Christ",
    references: ["37-2", "37-4", "50-6"]
  },
  {
    theme: "Love of God",
    references: ["1-4", "10-1", "10-2", "31-2", "32-3", "33-2", "41-2"]
  },
  {
    theme: "Grace and Mercy",
    references: ["4-5", "23-3"]
  },
  {
    theme: "Sovereignty",
    references: ["13-3", "19-5", "33-3"]
  },
  {
    theme: "Justice of God",
    references: ["4-5", "10-3"]
  },
  {
    theme: "God's Glory",
    references: ["14-2", "26-1", "41-1"]
  },
  {
    theme: "Old Testament Prophecy",
    references: ["2-5", "5-2", "5-3", "17-4", "28-2", "31-5", "43-3", "43-4", "45-4", "47-5"]
  },
  {
    theme: "Types and Shadows",
    references: ["5-3", "5-4", "5-5", "8-1"]
  },
  {
    theme: "Worship",
    references: ["2-2", "12-5", "31-2"]
  },
  {
    theme: "Prayer",
    references: ["9-3", "35-5", "37-4", "40-3"]
  },
  {
    theme: "Love and Service",
    references: ["33-5", "37-5"]
  },
  {
    theme: "Obedience",
    references: ["11-5", "36-1", "37-2"]
  },
  {
    theme: "Persecution",
    references: ["38-2", "38-3", "39-2"]
  },
  {
    theme: "Humility",
    references: ["6-3", "32-2", "33-3"]
  },
  {
    theme: "Judgment",
    references: ["4-5", "10-4", "16-2", "38-1", "39-4"]
  },
  {
    theme: "Hell",
    references: ["2-4", "16-4", "35-1"]
  },
  {
    theme: "Eternal Life",
    references: ["16-4", "16-5", "27-2", "29-1", "35-1", "41-2", "50-5"]
  },
  {
    theme: "Kingdom of God",
    references: ["9-1", "13-2", "31-1", "33-4", "38-1"]
  },
  {
    theme: "Purpose of Miracles",
    references: ["7-2", "14-2", "18-1", "22-3"]
  },
  {
    theme: "Water to Wine",
    references: ["7-1", "7-5"]
  },
  {
    theme: "Official's Son Healed",
    references: ["14-1"]
  },
  {
    theme: "Pool of Bethesda",
    references: ["15-1"]
  },
  {
    theme: "Feeding 5000",
    references: ["18-2", "19-1"]
  },
  {
    theme: "Walking on Water",
    references: ["18-4"]
  },
  {
    theme: "Blind Man Healed",
    references: ["26-1", "26-2", "26-3", "26-4", "26-5"]
  },
  {
    theme: "Raising Lazarus",
    references: ["29-1", "29-2", "29-3", "29-4", "29-5", "29-6", "30-1", "30-2", "30-3", "30-4", "30-5", "30-6"]
  },
  {
    theme: "Scripture's Reliability",
    references: ["1-5", "5-1", "17-4", "21-1", "48-2", "49-6"]
  },
  {
    theme: "Word of God",
    references: ["9-3", "17-5", "34-1", "39-5"]
  },
  {
    theme: "Satan",
    references: ["32-4", "34-2", "38-1", "38-5"]
  },
  {
    theme: "Victory Over Death",
    references: ["14-6", "27-4", "32-4", "46-1", "46-4"]
  },
  {
    theme: "Sabbath",
    references: ["15-3", "15-4"]
  },
  {
    theme: "Passover",
    references: ["5-5", "31-1", "43-3"]
  },
  {
    theme: "Temple",
    references: ["8-1", "8-5"]
  },
  {
    theme: "Marriage",
    references: ["23-2"]
  },
  {
    theme: "Baptism",
    references: ["5-6"]
  },
  {
    theme: "Peace",
    references: ["40-5", "48-4"]
  },
  {
    theme: "Joy",
    references: ["40-2"]
  },
  {
    theme: "Hope",
    references: ["35-1", "47-2"]
  },
  {
    theme: "Repentance",
    references: ["25-2", "43-1"]
  },
  {
    theme: "Gratitude",
    references: ["15-5", "26-4"]
  },
  {
    theme: "God as Father",
    references: ["1-4", "16-1", "16-6"]
  },
  {
    theme: "Disciples",
    references: ["6-1", "6-5", "13-5"]
  },
  {
    theme: "Unity of Believers",
    references: ["41-4"]
  },
  {
    theme: "False Religion",
    references: ["1-5", "8-5"]
  },
  {
    theme: "God's Timing",
    references: ["21-4", "24-4", "31-1", "43-3"]
  },
  {
    theme: "God's Sovereignty",
    references: ["18-3", "30-6", "36-3", "44-4"]
  },
  {
    theme: "Truth",
    references: ["24-2", "35-3", "38-5", "43-6"]
  },
  {
    theme: "Knowledge of God",
    references: ["1-3", "12-5", "35-2", "41-2"]
  },
  {
    theme: "Spiritual Blindness",
    references: ["3-3", "25-1", "38-4"]
  },
  {
    theme: "Fear of God",
    references: ["18-5"]
  },
  {
    theme: "Overcoming Fear",
    references: ["18-5", "36-5", "44-5"]
  },
  {
    theme: "John the Baptist",
    references: ["2-5", "5-1", "5-2", "17-2", "22-1"]
  },
  {
    theme: "Fourfold Witness",
    references: ["17-1", "17-2", "17-3", "17-4"]
  },
  {
    theme: "Eye Witness Testimony",
    references: ["13-2", "46-2", "48-2", "49-6"]
  },
  {
    theme: "Rejection by World",
    references: ["3-3", "10-3", "21-5", "38-2"]
  },
  {
    theme: "Judas' Betrayal",
    references: ["20-6", "33-6", "34-1", "34-2", "34-3", "42-2"]
  },
  {
    theme: "Peter's Denial",
    references: ["34-6", "43-1", "49-4"]
  },
  {
    theme: "Great Commission",
    references: ["38-3", "40-5"]
  },
  {
    theme: "Evangelism",
    references: ["13-5", "48-2"]
  },
  {
    theme: "Spiritual Harvest",
    references: ["13-5"]
  },
  {
    theme: "Teaching Ministry",
    references: ["22-4"]
  },
  {
    theme: "Fear of Death",
    references: ["46-4"]
  },
  {
    theme: "Physical vs Spiritual Death",
    references: ["16-4", "29-4"]
  },
  {
    theme: "Eternal Life Nature",
    references: ["35-1", "41-2", "47-2"]
  },
  {
    theme: "Jesus' Compassion",
    references: ["7-3", "15-1", "15-5", "30-1"]
  },
  {
    theme: "Jesus' Humility",
    references: ["32-2", "33-3"]
  },
  {
    theme: "Jesus' Love",
    references: ["16-6", "32-3", "33-2"]
  },
  {
    theme: "Jesus' Authority",
    references: ["18-3", "22-4", "44-4"]
  },
  {
    theme: "Jesus' Patience",
    references: ["24-4", "45-2"]
  },
  {
    theme: "Jesus' Selflessness",
    references: ["45-5"]
  },
  {
    theme: "Pharisees Opposition",
    references: ["5-1", "15-4", "17-2", "21-1", "24-3", "25-3"]
  },
  {
    theme: "Self-Righteousness",
    references: ["15-4", "17-5"]
  },
  {
    theme: "Hypocrisy",
    references: ["5-1", "23-4"]
  },
  {
    theme: "Innocence of Christ",
    references: ["43-2", "43-6"]
  },
  {
    theme: "Unjust Trial",
    references: ["43-5", "44-1"]
  },
  {
    theme: "Pilate",
    references: ["43-5", "43-6", "44-4", "44-5", "45-2", "45-3"]
  },
  {
    theme: "Old Covenant",
    references: ["17-5", "23-1"]
  },
  {
    theme: "New Covenant",
    references: ["27-5", "50-4"]
  },
  {
    theme: "Blood Sacrifice",
    references: ["8-2", "23-2"]
  },
  {
    theme: "Church",
    references: ["6-1", "13-1", "41-4"]
  },
  {
    theme: "Fellowship with God",
    references: ["35-2", "41-2"]
  },
  {
    theme: "Shepherds",
    references: ["49-4"]
  },
  {
    theme: "Changed Lives",
    references: ["26-5", "37-3", "43-1", "48-3"]
  },
  {
    theme: "Fruit of the Spirit",
    references: ["37-3", "37-5"]
  },
  {
    theme: "Sanctification",
    references: ["41-6"]
  },
  {
    theme: "Cleansing from Sin",
    references: ["9-4", "33-4"]
  },
  {
    theme: "God's Omniscience",
    references: ["8-6", "18-3", "49-4"]
  },
  {
    theme: "God's Omnipotence",
    references: ["18-1", "18-3"]
  },
  {
    theme: "God's Holiness",
    references: ["8-1", "10-3"]
  },
  {
    theme: "God's Immutability",
    references: ["23-1"]
  },
  {
    theme: "God's Self-Sufficiency",
    references: ["1-4", "16-6"]
  },
  {
    theme: "Mary (Mother of Jesus)",
    references: ["7-3", "45-5"]
  },
  {
    theme: "Mary Magdalene",
    references: ["48-1", "48-2"]
  },
  {
    theme: "Martha and Mary",
    references: ["29-6", "30-1"]
  },
  {
    theme: "Lazarus",
    references: ["29-1", "29-2", "29-3", "29-4", "29-5", "29-6", "30-1", "30-2", "30-3", "30-4", "30-5", "30-6"]
  },
  {
    theme: "Nicodemus",
    references: ["9-2", "14-3", "22-2", "46-5"]
  },
  {
    theme: "Thomas",
    references: ["48-5"]
  },
  {
    theme: "Andrew",
    references: ["6-4"]
  },
  {
    theme: "Philip",
    references: ["6-5"]
  },
  {
    theme: "Nathanael",
    references: ["6-5"]
  },
  {
    theme: "Barabbas",
    references: ["43-6"]
  },
  {
    theme: "Caiaphas",
    references: ["30-6", "43-4"]
  },
  {
    theme: "Living Water",
    references: ["12-4", "22-5"]
  },
  {
    theme: "Foot Washing",
    references: ["33-3", "33-4"]
  },
  {
    theme: "Light Imagery",
    references: ["2-4", "3-2", "10-4", "24-2"]
  },
  {
    theme: "Darkness Imagery",
    references: ["2-4", "3-1", "34-3", "38-4"]
  },
  {
    theme: "Manna",
    references: ["19-4"]
  },
  {
    theme: "Last Supper",
    references: ["33-1"]
  },
  {
    theme: "Vine and Branches",
    references: ["37-2", "37-3"]
  },
  {
    theme: "Cleansing Temple",
    references: ["8-4", "8-5"]
  },
  {
    theme: "Temple as Type",
    references: ["8-1", "8-5"]
  },
  {
    theme: "Body as Temple",
    references: ["8-5"]
  },
  {
    theme: "Garden of Gethsemane",
    references: ["42-1"]
  },
  {
    theme: "Garden Tomb",
    references: ["46-6"]
  },
  {
    theme: "Roman Authority",
    references: ["43-4", "43-5", "44-1"]
  },
  {
    theme: "Political Intrigue",
    references: ["30-6", "44-5"]
  },
  {
    theme: "Crucifixion Details",
    references: ["44-1", "45-2"]
  },
  {
    theme: "Blood and Water",
    references: ["46-1"]
  },
  {
    theme: "Resurrection Body",
    references: ["48-4"]
  },
  {
    theme: "The Hour",
    references: ["7-3", "21-4", "24-4", "31-1", "32-1"]
  },
  {
    theme: "Day of Preparation",
    references: ["43-3"]
  },
  {
    theme: "Third Day",
    references: ["47-3"]
  },
  {
    theme: "Wedding at Cana",
    references: ["7-1"]
  },
  {
    theme: "Breakfast by Sea",
    references: ["49-1"]
  },
  {
    theme: "Scripture Inspiration",
    references: ["1-5", "39-5"]
  },
  {
    theme: "Scripture Authority",
    references: ["17-5", "32-5"]
  },
  {
    theme: "Scripture Sufficiency",
    references: ["34-1"]
  },
  {
    theme: "Scripture Clarity",
    references: ["9-3"]
  },
  {
    theme: "Spiritual Maturity",
    references: ["26-4", "37-3"]
  },
  {
    theme: "Perseverance",
    references: ["39-1", "40-5"]
  },
  {
    theme: "Discipline",
    references: ["37-3"]
  },
  {
    theme: "Sorrow",
    references: ["29-1", "30-1", "40-2", "43-1"]
  },
  {
    theme: "Shame",
    references: ["49-4"]
  },
  {
    theme: "Asking Questions",
    references: ["9-2", "40-3"]
  },
  {
    theme: "Seeking God",
    references: ["6-5", "9-2", "48-1"]
  },
  {
    theme: "Skepticism",
    references: ["6-5", "14-4"]
  },
  {
    theme: "Comparison with Islam",
    references: ["1-4", "2-5", "4-4", "16-6"]
  },
  {
    theme: "False Gods",
    references: ["1-2", "1-4"]
  },
  {
    theme: "Other Religions General",
    references: ["1-5", "8-5", "22-3"]
  },
  {
    theme: "Father's House",
    references: ["35-1"]
  },
  {
    theme: "New Creation",
    references: ["16-5", "35-1", "47-2"]
  },
  {
    theme: "Eternal State",
    references: ["35-1", "41-2"]
  },
  {
    theme: "Jesus' Prayers",
    references: ["41-1", "41-2", "41-3", "41-4", "41-5", "41-6", "42-1"]
  },
  {
    theme: "Model for Prayer",
    references: ["35-5", "37-4"]
  },
  {
    theme: "Angels",
    references: ["15-2", "48-1", "42-4"]
  },
  {
    theme: "Creator Christ",
    references: ["2-1", "18-1", "25-6"]
  },
  {
    theme: "Purpose of Creation",
    references: ["1-3", "14-2", "16-6"]
  },
  {
    theme: "Divine Appointment",
    references: ["12-3", "18-3"]
  },
  {
    theme: "God's Plans",
    references: ["30-6", "44-4"]
  },
  {
    theme: "Interpretation Principles",
    references: ["7-4", "19-2", "28-6"]
  },
  {
    theme: "Context",
    references: ["21-1", "40-1"]
  },
  {
    theme: "Evidence for Faith",
    references: ["17-1", "22-3", "47-3", "47-4", "47-5", "48-2"]
  },
  {
    theme: "Historical Reliability",
    references: ["21-1", "46-2"]
  },
  {
    theme: "Taking Up Cross",
    references: ["31-1", "39-2", "49-5"]
  },
  {
    theme: "Counting Cost",
    references: ["32-2"]
  },
  {
    theme: "Sacrifice",
    references: ["31-2", "37-5"]
  },
  {
    theme: "Judas as Example",
    references: ["20-6", "34-2"]
  },
  {
    theme: "Worldly Religion",
    references: ["15-4"]
  },
  {
    theme: "Unbelief",
    references: ["20-3", "25-4"]
  },
  {
    theme: "Greed",
    references: ["31-3", "34-2"]
  },
  {
    theme: "Pride",
    references: ["6-3"]
  },
  {
    theme: "Adultery",
    references: ["23-1"]
  },
  {
    theme: "Jewish Messianic Expectations",
    references: ["6-4", "13-1", "13-4", "31-5"]
  },
  {
    theme: "Fulfilled Messiahship",
    references: ["13-1", "28-2"]
  },
  {
    theme: "Doing God's Will",
    references: ["17-5", "36-2"]
  },
  {
    theme: "Jesus' Submission to Father",
    references: ["16-1", "36-6", "42-1"]
  },
  {
    theme: "Son of Man",
    references: ["6-6", "13-1"]
  },
  {
    theme: "Son of God",
    references: ["6-6", "16-3", "43-3", "48-5"]
  },
  {
    theme: "Lamb of God",
    references: ["5-2", "5-4", "5-5", "50-4"]
  },
  {
    theme: "Messiah",
    references: ["6-4", "13-1"]
  },
  {
    theme: "Lord",
    references: ["43-1", "48-2", "48-5"]
  },
  {
    theme: "King",
    references: ["31-5", "43-5", "45-3"]
  },
  {
    theme: "Teacher",
    references: ["34-1", "48-2"]
  },
  {
    theme: "Imputation",
    references: ["25-2", "33-4", "50-3"]
  },
  {
    theme: "Justification",
    references: ["17-5", "25-2"]
  },
  {
    theme: "Adoption",
    references: ["3-5", "25-2"]
  },
  {
    theme: "Regeneration",
    references: ["3-5", "9-5"]
  },
  {
    theme: "Propitiation",
    references: ["4-5", "50-4"]
  },
  {
    theme: "Reconciliation",
    references: ["4-6", "33-4"]
  },
  {
    theme: "Faith",
    references: ["11-5", "14-4", "30-4"]
  },
  {
    theme: "Courage",
    references: ["39-2", "48-3"]
  },
  {
    theme: "Against Falling Away",
    references: ["39-1", "40-1"]
  },
  {
    theme: "Against Hardening Heart",
    references: ["34-3", "38-4"]
  },
  {
    theme: "Against Loving World",
    references: ["38-2"]
  },
  {
    theme: "Against Unbelief",
    references: ["14-4", "32-6"]
  },
  {
    theme: "Kept by God",
    references: ["19-5", "28-3", "33-3", "35-1"]
  },
  {
    theme: "Eternal Security",
    references: ["28-3", "35-1"]
  },
  {
    theme: "Evidence of Salvation",
    references: ["23-5", "37-2"]
  },
  {
    theme: "Appearance to Mary",
    references: ["48-1"]
  },
  {
    theme: "Appearance to Disciples",
    references: ["48-4"]
  },
  {
    theme: "Appearance to Thomas",
    references: ["48-5"]
  },
  {
    theme: "Appearance by the Sea",
    references: ["49-1"]
  },
  {
    theme: "500 Witnesses",
    references: ["48-3"]
  }
];

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = biblicalThemes;
}

// Example usage:
// const trinityRefs = biblicalThemes.find(t => t.theme === "Trinity").references;
// console.log(trinityRefs); // ["1-3", "1-4", "4-2", ...]

// To search for a theme:
// function findTheme(searchTerm) {
//   return biblicalThemes.filter(t => 
//     t.theme.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// }

// To get all themes for a specific session:
// function getSessionThemes(sessionNum) {
//   return biblicalThemes.filter(t => 
//     t.references.some(ref => ref.startsWith(sessionNum + "-"))
//   ).map(t => t.theme);
// }