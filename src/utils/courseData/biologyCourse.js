// Biology Course - Springboard Style Structure
export const biologyCourse = {
  id: 'biology-mastery-101',
  name: 'Biology - Complete Course',
  description: 'Explore life sciences from cells to ecosystems',
  subject: 'Science (Biology)',
  level: 'mastery',
  duration: '50 hours',
  thumbnail: '🧬',
  color: '#ec4899',
  totalLessons: 4,

  lessons: [
    {
      id: 'bio-lesson-1', title: 'Cell Biology', duration: '12 hours', order: 1,
      description: 'The fundamental unit of life and cellular processes',
      topics: [
        {
          id: 'bio-1-1', title: 'Cell: The Basic Unit of Life', duration: '50 min', xpReward: 100,
          content: `All living organisms are made of cells. Cell theory states:\n1. All living things are made of cells\n2. Cell is the basic unit of life\n3. All cells arise from pre-existing cells\n\nPlant Cell vs Animal Cell:\n• Plant cells have cell wall, chloroplasts, large vacuole\n• Animal cells have centrioles, smaller vacuoles\n• Both have nucleus, mitochondria, ER, Golgi body`,
          keyPoints: ['Cell is the structural and functional unit of life', 'Prokaryotic cells lack nucleus (bacteria)', 'Eukaryotic cells have membrane-bound nucleus', 'Plant cells have rigid cell wall for support', 'Mitochondria = powerhouse of the cell'],
          examples: ['Red blood cells carry oxygen', 'Nerve cells transmit electrical signals', 'White blood cells fight infections'],
          subtopics: [
            { id: 'bio-1-1-s1', title: 'Cell Organelles', content: 'Nucleus: control center, contains DNA. Mitochondria: energy production (ATP). ER: protein (rough) and lipid (smooth) synthesis. Golgi: packaging and transport. Lysosomes: digestion (suicide bags).' },
            { id: 'bio-1-1-s2', title: 'Cell Division', content: 'Mitosis: one cell → two identical cells (growth/repair). Meiosis: one cell → four cells with half chromosomes (gamete formation). Cancer = uncontrolled mitosis.' }
          ],
          summary: 'Cells are the building blocks of life with specialized organelles performing specific functions.',
          quiz: [
            { id: 'q1', question: 'Powerhouse of the cell is:', options: ['Nucleus', 'Mitochondria', 'Golgi body', 'ER'], correct: 1, explanation: 'Mitochondria produce ATP (energy currency) through cellular respiration.' },
            { id: 'q2', question: 'Which is absent in animal cells?', options: ['Nucleus', 'Cell wall', 'Mitochondria', 'Cytoplasm'], correct: 1, explanation: 'Cell wall is present only in plant cells, fungi, and bacteria.' },
            { id: 'q3', question: 'Prokaryotic cells lack:', options: ['Cell membrane', 'DNA', 'Membrane-bound nucleus', 'Ribosomes'], correct: 2, explanation: 'Prokaryotes have DNA but no membrane-bound nucleus.' }
          ]
        },
        {
          id: 'bio-1-2', title: 'Tissues', duration: '45 min', xpReward: 90,
          content: `A tissue is a group of cells with similar structure performing a specific function.\n\nPlant Tissues:\n• Meristematic: growth regions (tips of roots/stems)\n• Permanent: simple (parenchyma, collenchyma, sclerenchyma) and complex (xylem, phloem)\n\nAnimal Tissues:\n• Epithelial: covering/lining (skin, intestine)\n• Connective: support (bone, blood, cartilage)\n• Muscular: movement (skeletal, smooth, cardiac)\n• Nervous: signal transmission (neurons)`,
          keyPoints: ['Tissues = group of similar cells', 'Meristematic tissue divides actively', 'Xylem transports water, Phloem transports food', 'Blood is a connective tissue', 'Cardiac muscle never fatigues'],
          examples: ['Skin is epithelial tissue', 'Bones and cartilage are connective tissue', 'Heart has cardiac muscle tissue'],
          subtopics: [
            { id: 'bio-1-2-s1', title: 'Plant Vascular Tissues', content: 'Xylem: transports water UP from roots (dead cells, one-way). Phloem: transports food both ways (living cells). Together they form vascular bundles.' },
            { id: 'bio-1-2-s2', title: 'Types of Muscle Tissue', content: 'Skeletal: voluntary, striated, attached to bones. Smooth: involuntary, in organs (stomach, intestine). Cardiac: involuntary, striated, only in heart, never tires.' }
          ],
          summary: 'Tissues are organized groups of cells that work together. Plants and animals have different tissue types suited to their needs.',
          quiz: [
            { id: 'q1', question: 'Blood is which type of tissue?', options: ['Epithelial', 'Muscular', 'Connective', 'Nervous'], correct: 2, explanation: 'Blood is a fluid connective tissue with cells in plasma matrix.' },
            { id: 'q2', question: 'Xylem transports:', options: ['Food', 'Water', 'Hormones', 'Oxygen'], correct: 1, explanation: 'Xylem transports water and minerals from roots to leaves.' }
          ]
        }
      ]
    },
    {
      id: 'bio-lesson-2', title: 'Life Processes', duration: '14 hours', order: 2,
      description: 'Nutrition, respiration, transportation and excretion',
      topics: [
        {
          id: 'bio-2-1', title: 'Nutrition and Photosynthesis', duration: '55 min', xpReward: 110,
          content: `Nutrition is the process of obtaining and utilizing food for energy and growth.\n\nAutotrophic Nutrition (Plants):\nPhotosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n• Occurs in chloroplasts (chlorophyll)\n• Needs: sunlight, CO₂, water\n• Produces: glucose, oxygen\n\nHeterotrophic Nutrition (Animals):\n• Holozoic: ingestion → digestion → absorption → assimilation → egestion\n• Saprophytic: feeding on dead matter (fungi)\n• Parasitic: feeding on host (tapeworm)`,
          keyPoints: ['Photosynthesis converts light energy to chemical energy', 'Chlorophyll absorbs sunlight', 'Stomata allow gas exchange in leaves', 'Human digestive system breaks food mechanically and chemically', 'Enzymes are biological catalysts'],
          examples: ['Plants are autotrophs (make own food)', 'Humans are holozoic heterotrophs', 'Mushrooms are saprophytes'],
          subtopics: [
            { id: 'bio-2-1-s1', title: 'Human Digestive System', content: 'Mouth (saliva/amylase) → Stomach (HCl/pepsin) → Small intestine (bile/pancreatic juice, absorption) → Large intestine (water absorption) → Rectum.' },
            { id: 'bio-2-1-s2', title: 'Factors Affecting Photosynthesis', content: 'Light intensity, CO₂ concentration, temperature, water availability. Law of limiting factors: rate limited by factor in shortest supply.' }
          ],
          summary: 'Living organisms obtain nutrients either by making food (autotrophs) or consuming others (heterotrophs).',
          quiz: [
            { id: 'q1', question: 'Photosynthesis occurs in:', options: ['Mitochondria', 'Chloroplasts', 'Nucleus', 'Vacuole'], correct: 1, explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis.' },
            { id: 'q2', question: 'Which enzyme breaks starch?', options: ['Pepsin', 'Lipase', 'Amylase', 'Trypsin'], correct: 2, explanation: 'Amylase (in saliva and pancreatic juice) breaks starch into maltose.' }
          ]
        },
        {
          id: 'bio-2-2', title: 'Respiration and Transportation', duration: '55 min', xpReward: 110,
          content: `Respiration breaks down glucose to release energy:\n\nAerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP)\nAnaerobic: Without oxygen. In muscles → lactic acid. In yeast → ethanol + CO₂\n\nHuman Circulatory System:\n• Heart: 4 chambers (2 atria, 2 ventricles)\n• Double circulation: pulmonary + systemic\n• Arteries carry oxygenated blood (away from heart)\n• Veins carry deoxygenated blood (to heart)\n• Capillaries: site of exchange`,
          keyPoints: ['Aerobic respiration yields more ATP', 'Anaerobic respiration in yeast = fermentation', 'Heart pumps blood in double circulation', 'RBC contain hemoglobin for O₂ transport', 'Blood pressure = systolic/diastolic'],
          examples: ['Yeast fermentation in bread and beer', 'Muscle cramps from lactic acid buildup', 'Heart beats ~72 times per minute'],
          subtopics: [
            { id: 'bio-2-2-s1', title: 'Human Heart', content: '4 chambers: Right atrium/ventricle receive deoxygenated blood, Left atrium/ventricle receive oxygenated blood. Valves prevent backflow. SA node is natural pacemaker.' },
            { id: 'bio-2-2-s2', title: 'Transport in Plants', content: 'Transpiration pull drives water movement up xylem. Translocation moves food through phloem. Root pressure also helps water ascent.' }
          ],
          summary: 'Respiration releases energy from food. The circulatory system transports nutrients, oxygen, and waste throughout the body.',
          quiz: [
            { id: 'q1', question: 'Aerobic respiration needs:', options: ['Only glucose', 'Glucose + O₂', 'Only O₂', 'CO₂'], correct: 1, explanation: 'Aerobic respiration requires glucose and oxygen.' },
            { id: 'q2', question: 'Human heart has ___ chambers:', options: ['2', '3', '4', '5'], correct: 2, explanation: 'Human heart has 4 chambers: 2 atria and 2 ventricles.' }
          ]
        }
      ]
    },
    {
      id: 'bio-lesson-3', title: 'Heredity and Evolution', duration: '12 hours', order: 3,
      description: 'Genetics, DNA, inheritance and evolutionary biology',
      topics: [
        {
          id: 'bio-3-1', title: 'Heredity: Mendel\'s Laws', duration: '55 min', xpReward: 120,
          content: `Heredity is the transmission of traits from parents to offspring.\n\nMendel's Laws:\n1. Law of Dominance: One allele dominates the other\n2. Law of Segregation: Alleles separate during gamete formation\n3. Law of Independent Assortment: Different traits inherit independently\n\nMonohybrid Cross: Tt × Tt → TT : Tt : tt = 1:2:1 (genotypic)\nPhenotypic ratio: 3:1 (Tall : Short)\n\nSex Determination: XX = Female, XY = Male (in humans)`,
          keyPoints: ['Genes are units of heredity on chromosomes', 'Alleles are different forms of a gene', 'Dominant allele expressed in heterozygous', 'Monohybrid ratio 3:1, Dihybrid 9:3:3:1', 'Father determines sex of child (X or Y sperm)'],
          examples: ['Tall (T) dominant over short (t) in pea plants', 'Blood groups: A, B are codominant over O', 'Color blindness is X-linked recessive'],
          subtopics: [
            { id: 'bio-3-1-s1', title: 'DNA: The Blueprint of Life', content: 'DNA (deoxyribonucleic acid) is a double helix of nucleotides (A-T, G-C pairs). Genes are segments of DNA that code for proteins. Human genome has ~20,000 genes.' },
            { id: 'bio-3-1-s2', title: 'Genetic Disorders', content: 'Autosomal: Sickle cell anemia, Thalassemia. Sex-linked: Hemophilia, Color blindness. Chromosomal: Down syndrome (trisomy 21).' }
          ],
          summary: 'Mendel\'s laws explain how traits pass from parents to offspring through genes. DNA carries the genetic code for all living organisms.',
          quiz: [
            { id: 'q1', question: 'Monohybrid phenotypic ratio is:', options: ['1:2:1', '3:1', '9:3:3:1', '1:1'], correct: 1, explanation: 'Monohybrid cross gives 3:1 phenotypic ratio (3 dominant : 1 recessive).' },
            { id: 'q2', question: 'Sex of child is determined by:', options: ['Mother', 'Father', 'Both equally', 'Environment'], correct: 1, explanation: 'Father provides either X or Y chromosome, determining sex.' }
          ]
        }
      ]
    },
    {
      id: 'bio-lesson-4', title: 'Ecology and Environment', duration: '10 hours', order: 4,
      description: 'Ecosystems, food chains, biodiversity and conservation',
      topics: [
        {
          id: 'bio-4-1', title: 'Ecosystems and Food Chains', duration: '50 min', xpReward: 100,
          content: `An ecosystem is a community of living organisms interacting with their environment.\n\nComponents:\n• Biotic: Producers, consumers, decomposers\n• Abiotic: Sunlight, water, temperature, soil\n\nFood Chain: Grass → Grasshopper → Frog → Snake → Eagle\nFood Web: Interconnected food chains\n\n10% Law: Only 10% of energy transfers to the next trophic level.\n\nBiogeochemical Cycles: Water cycle, Carbon cycle, Nitrogen cycle`,
          keyPoints: ['Producers convert solar energy (autotrophs)', 'Energy decreases at each trophic level', '10% law limits food chain length (3-4 levels)', 'Decomposers recycle nutrients', 'Ozone layer protects from UV radiation'],
          examples: ['Forest ecosystem has trees, animals, fungi', 'Aquatic food chain: Algae → Fish → Shark', 'Decomposition returns nutrients to soil'],
          subtopics: [
            { id: 'bio-4-1-s1', title: 'Biodiversity Conservation', content: 'Biodiversity hotspots, national parks, wildlife sanctuaries. Threats: deforestation, pollution, climate change. In-situ (natural habitat) vs Ex-situ (zoos, seed banks) conservation.' },
            { id: 'bio-4-1-s2', title: 'Environmental Issues', content: 'Pollution: air, water, soil, noise. Ozone depletion by CFCs. Global warming from greenhouse gases. Sustainable development: meeting present needs without compromising future.' }
          ],
          summary: 'Ecosystems are complex webs of life where energy flows and nutrients cycle. Conservation is essential to maintain biodiversity.',
          quiz: [
            { id: 'q1', question: '10% law states:', options: ['10% organisms survive', '10% energy transfers to next level', '10% food is wasted', '10% species are endangered'], correct: 1, explanation: 'Only 10% of energy at one trophic level passes to the next.' },
            { id: 'q2', question: 'Decomposers include:', options: ['Plants', 'Animals', 'Fungi and bacteria', 'Viruses'], correct: 2, explanation: 'Fungi and bacteria decompose dead organic matter, recycling nutrients.' }
          ]
        }
      ]
    }
  ]
};

export default biologyCourse;
