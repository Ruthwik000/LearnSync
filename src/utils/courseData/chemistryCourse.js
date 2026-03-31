// Chemistry Course - Springboard Style Structure
export const chemistryCourse = {
  id: 'chemistry-mastery-101',
  name: 'Chemistry - Complete Course',
  description: 'Explore the world of atoms, reactions, and chemical bonding',
  subject: 'Science (Chemistry)',
  level: 'mastery',
  duration: '55 hours',
  thumbnail: '🧪',
  color: '#10b981',
  totalLessons: 4,

  lessons: [
    {
      id: 'chem-lesson-1',
      title: 'Matter and Its Composition',
      duration: '12 hours',
      order: 1,
      description: 'Understand atoms, molecules, and the structure of matter',
      topics: [
        {
          id: 'chem-1-1', title: 'Atoms and Molecules', duration: '50 min', xpReward: 100,
          content: `All matter is made up of atoms. An atom is the smallest particle of an element that retains its chemical identity.\n\nAtomic number (Z) = number of protons\nMass number (A) = protons + neutrons\n\nMolecules are formed when two or more atoms combine chemically. They can be of the same element (O₂) or different elements (H₂O).`,
          keyPoints: ['Atoms are building blocks of matter', 'Protons (+), Neutrons (0), Electrons (-)', 'Atomic number = number of protons', 'Isotopes have same Z but different A', 'Molecules are groups of bonded atoms'],
          examples: ['Water (H₂O) has 2 hydrogen and 1 oxygen atom', 'Oxygen gas (O₂) is a diatomic molecule', 'Carbon-12 and Carbon-14 are isotopes'],
          subtopics: [
            { id: 'chem-1-1-s1', title: 'Atomic Models', content: 'Thomson: plum pudding model. Rutherford: nuclear model with electrons orbiting. Bohr: electrons in fixed orbits/shells. Modern: electron cloud/probability model.' },
            { id: 'chem-1-1-s2', title: 'Electron Configuration', content: 'Electrons fill shells: K(2), L(8), M(18), N(32). Valence electrons in outermost shell determine chemical behavior and bonding.' }
          ],
          summary: 'Atoms are the fundamental units of matter composed of protons, neutrons, and electrons. They combine to form molecules through chemical bonds.',
          quiz: [
            { id: 'q1', question: 'Atomic number is the number of:', options: ['Neutrons', 'Protons', 'Electrons only', 'Protons + Neutrons'], correct: 1, explanation: 'Atomic number (Z) = number of protons in the nucleus.' },
            { id: 'q2', question: 'Isotopes differ in number of:', options: ['Protons', 'Electrons', 'Neutrons', 'All of these'], correct: 2, explanation: 'Isotopes have same protons but different neutrons, giving different mass numbers.' },
            { id: 'q3', question: 'Maximum electrons in L shell:', options: ['2', '8', '18', '32'], correct: 1, explanation: 'L shell (n=2) can hold maximum 2n² = 2(4) = 8 electrons.' }
          ]
        },
        {
          id: 'chem-1-2', title: 'Chemical Bonding', duration: '55 min', xpReward: 120,
          content: `Chemical bonds hold atoms together in compounds. Main types:\n\n1. Ionic Bond: Transfer of electrons (metal + non-metal). Example: NaCl\n2. Covalent Bond: Sharing of electrons (non-metal + non-metal). Example: H₂O\n3. Metallic Bond: Sea of delocalized electrons in metals\n\nOctet Rule: Atoms tend to gain/lose/share electrons to achieve 8 electrons in their valence shell.`,
          keyPoints: ['Ionic bonds form by electron transfer', 'Covalent bonds form by electron sharing', 'Metallic bonds involve electron sea', 'Octet rule drives bond formation', 'Bond strength: Ionic > Covalent (generally)'],
          examples: ['NaCl: Na loses 1e⁻, Cl gains 1e⁻ (ionic)', 'H₂O: O shares electrons with 2 H atoms (covalent)', 'Diamond: each C atom covalently bonded to 4 others'],
          subtopics: [
            { id: 'chem-1-2-s1', title: 'Ionic vs Covalent Properties', content: 'Ionic compounds: high melting point, conduct in solution, crystalline solids. Covalent compounds: lower melting point, poor conductors, can be gases/liquids.' },
            { id: 'chem-1-2-s2', title: 'Lewis Dot Structures', content: 'Dots represent valence electrons around element symbol. Shared pairs shown between atoms. Lone pairs shown on individual atoms.' }
          ],
          summary: 'Chemical bonds (ionic, covalent, metallic) form when atoms seek stable electron configurations, typically following the octet rule.',
          quiz: [
            { id: 'q1', question: 'NaCl has what type of bond?', options: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'], correct: 1, explanation: 'NaCl forms by transfer of electron from Na (metal) to Cl (non-metal) = ionic bond.' },
            { id: 'q2', question: 'Covalent bonds involve:', options: ['Transfer of electrons', 'Sharing of electrons', 'Loss of protons', 'Gain of neutrons'], correct: 1, explanation: 'Covalent bonds form when atoms share electron pairs.' }
          ]
        }
      ]
    },
    {
      id: 'chem-lesson-2',
      title: 'Chemical Reactions and Equations',
      duration: '14 hours',
      order: 2,
      description: 'Learn to write, balance, and classify chemical reactions',
      topics: [
        {
          id: 'chem-2-1', title: 'Types of Chemical Reactions', duration: '55 min', xpReward: 120,
          content: `Chemical reactions involve rearrangement of atoms. Types:\n\n1. Combination: A + B → AB (Synthesis)\n2. Decomposition: AB → A + B (Breaking down)\n3. Displacement: A + BC → AC + B (More reactive replaces less reactive)\n4. Double Displacement: AB + CD → AD + CB (Exchange of ions)\n5. Redox: Involves oxidation and reduction simultaneously\n\nBalancing equations: Same number of atoms on both sides (Law of Conservation of Mass).`,
          keyPoints: ['Reactions rearrange atoms, not create/destroy them', 'Balanced equations follow conservation of mass', 'Combination reactions join substances', 'Decomposition breaks compounds apart', 'Reactivity series determines displacement'],
          examples: ['2H₂ + O₂ → 2H₂O (Combination)', 'CaCO₃ → CaO + CO₂ (Decomposition by heat)', 'Zn + CuSO₄ → ZnSO₄ + Cu (Displacement)'],
          subtopics: [
            { id: 'chem-2-1-s1', title: 'Balancing Chemical Equations', content: 'Step 1: Write unbalanced equation. Step 2: Count atoms on each side. Step 3: Add coefficients to balance. Step 4: Verify all atoms are balanced.' },
            { id: 'chem-2-1-s2', title: 'Oxidation and Reduction', content: 'Oxidation: loss of electrons (increase in oxidation state). Reduction: gain of electrons (decrease in oxidation state). OIL RIG: Oxidation Is Loss, Reduction Is Gain.' }
          ],
          summary: 'Chemical reactions are classified by how reactants transform. Balancing equations ensures atoms are conserved.',
          quiz: [
            { id: 'q1', question: '2Mg + O₂ → 2MgO is a:', options: ['Decomposition', 'Combination', 'Displacement', 'Double displacement'], correct: 1, explanation: 'Two substances combine to form one product = combination reaction.' },
            { id: 'q2', question: 'In a balanced equation:', options: ['Molecules are equal', 'Atoms are equal on both sides', 'Products > Reactants', 'Energy is created'], correct: 1, explanation: 'Law of Conservation of Mass: atoms must be equal on both sides.' }
          ]
        },
        {
          id: 'chem-2-2', title: 'Acids, Bases and Salts', duration: '60 min', xpReward: 130,
          content: `Acids: Substances that produce H⁺ ions in water. Taste sour. pH < 7.\nBases: Substances that produce OH⁻ ions in water. Taste bitter/soapy. pH > 7.\nSalts: Formed by reaction of acid + base (Neutralization).\n\npH Scale: 0 (strongly acidic) ← 7 (neutral) → 14 (strongly basic)\n\nIndicators: Litmus, Phenolphthalein, Methyl Orange change color to indicate acid/base.`,
          keyPoints: ['Acids produce H⁺, bases produce OH⁻', 'pH scale ranges from 0 to 14', 'Acid + Base → Salt + Water (Neutralization)', 'Strong acids/bases ionize completely', 'Buffer solutions resist pH changes'],
          examples: ['HCl (hydrochloric acid) - stomach acid', 'NaOH (sodium hydroxide) - soap making', 'NaCl (common salt) from HCl + NaOH'],
          subtopics: [
            { id: 'chem-2-2-s1', title: 'pH and Its Importance', content: 'pH = -log[H⁺]. Our blood pH is 7.4 (slightly basic). Acid rain has pH < 5.6. Soil pH affects plant growth. Tooth decay occurs below pH 5.5.' },
            { id: 'chem-2-2-s2', title: 'Salt Hydrolysis', content: 'Salts from strong acid + weak base are acidic. Salts from weak acid + strong base are basic. Salts from strong acid + strong base are neutral.' }
          ],
          summary: 'Acids and bases are characterized by their H⁺/OH⁻ ions and pH. Their reactions produce salts and water through neutralization.',
          quiz: [
            { id: 'q1', question: 'pH of pure water is:', options: ['0', '7', '14', '1'], correct: 1, explanation: 'Pure water is neutral with pH = 7.' },
            { id: 'q2', question: 'Acid + Base →', options: ['Acid + Water', 'Salt + Water', 'Base + Gas', 'Nothing'], correct: 1, explanation: 'Neutralization: Acid + Base → Salt + Water.' },
            { id: 'q3', question: 'Blue litmus turns red in:', options: ['Base', 'Acid', 'Salt', 'Water'], correct: 1, explanation: 'Acids turn blue litmus red.' }
          ]
        }
      ]
    },
    {
      id: 'chem-lesson-3',
      title: 'Metals and Non-Metals',
      duration: '10 hours',
      order: 3,
      description: 'Compare properties and reactions of metals and non-metals',
      topics: [
        {
          id: 'chem-3-1', title: 'Properties of Metals and Non-Metals', duration: '50 min', xpReward: 110,
          content: `Metals (left side of periodic table):\n• Lustrous, malleable, ductile\n• Good conductors of heat and electricity\n• Generally solid (except Mercury)\n• Form positive ions (lose electrons)\n\nNon-metals (right side):\n• Dull, brittle\n• Poor conductors (except Graphite)\n• Can be solid, liquid, or gas\n• Form negative ions (gain electrons)\n\nMetalloids: Show properties of both (Si, Ge)`,
          keyPoints: ['Metals are lustrous, malleable, ductile', 'Non-metals are brittle, dull', 'Metals form cations, non-metals form anions', 'Metalloids have intermediate properties', 'Reactivity series arranges metals by reactivity'],
          examples: ['Gold is the most malleable metal', 'Diamond (carbon) is hardest natural substance', 'Silicon is a metalloid used in semiconductors'],
          subtopics: [
            { id: 'chem-3-1-s1', title: 'Reactivity Series', content: 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au. More reactive metals displace less reactive ones from their salt solutions.' },
            { id: 'chem-3-1-s2', title: 'Corrosion and Its Prevention', content: 'Corrosion: metals react with air/water and deteriorate. Rusting: Fe + O₂ + H₂O → Fe₂O₃. Prevention: galvanization, painting, alloying, electroplating.' }
          ],
          summary: 'Metals and non-metals have contrasting physical and chemical properties. The reactivity series helps predict chemical reactions.',
          quiz: [
            { id: 'q1', question: 'Which metal is liquid at room temperature?', options: ['Sodium', 'Gold', 'Mercury', 'Iron'], correct: 2, explanation: 'Mercury (Hg) is the only metal that is liquid at room temperature.' },
            { id: 'q2', question: 'Most reactive metal is:', options: ['Gold', 'Iron', 'Potassium', 'Copper'], correct: 2, explanation: 'Potassium (K) is at the top of the reactivity series.' }
          ]
        }
      ]
    },
    {
      id: 'chem-lesson-4',
      title: 'Carbon and Its Compounds',
      duration: '12 hours',
      order: 4,
      description: 'Study organic chemistry basics and carbon compounds',
      topics: [
        {
          id: 'chem-4-1', title: 'Carbon: The Versatile Element', duration: '55 min', xpReward: 120,
          content: `Carbon has atomic number 6 with 4 valence electrons. It forms 4 covalent bonds.\n\nUnique Properties:\n• Catenation: Carbon atoms bond with each other to form long chains, branches, and rings\n• Tetravalency: Forms 4 bonds giving diverse compounds\n\nAllotropes: Diamond (hardest), Graphite (conductor, lubricant), Fullerene (C₆₀)\n\nOrganic compounds contain carbon bonded to H, O, N, S, halogens.`,
          keyPoints: ['Carbon has 4 valence electrons', 'Catenation allows long carbon chains', 'Diamond, graphite, fullerene are allotropes', 'Hydrocarbons: Alkanes, Alkenes, Alkynes', 'Functional groups give specific properties'],
          examples: ['Methane CH₄ - simplest hydrocarbon', 'Ethanol C₂H₅OH - used in sanitizers', 'Acetic acid CH₃COOH - vinegar'],
          subtopics: [
            { id: 'chem-4-1-s1', title: 'Hydrocarbons', content: 'Alkanes (single bonds, CₙH₂ₙ₊₂), Alkenes (double bond, CₙH₂ₙ), Alkynes (triple bond, CₙH₂ₙ₋₂). Saturated vs unsaturated hydrocarbons.' },
            { id: 'chem-4-1-s2', title: 'Functional Groups', content: '-OH (alcohol), -CHO (aldehyde), -COOH (carboxylic acid), -CO- (ketone). These groups determine the chemical properties of organic compounds.' }
          ],
          summary: 'Carbon\'s unique bonding ability creates millions of compounds. Understanding hydrocarbons and functional groups is key to organic chemistry.',
          quiz: [
            { id: 'q1', question: 'Carbon can form a maximum of ___ bonds:', options: ['2', '3', '4', '6'], correct: 2, explanation: 'Carbon has 4 valence electrons and forms 4 covalent bonds.' },
            { id: 'q2', question: 'Allotrope of carbon that conducts electricity:', options: ['Diamond', 'Graphite', 'Fullerene', 'Coal'], correct: 1, explanation: 'Graphite has free electrons in its layered structure, allowing conduction.' }
          ]
        }
      ]
    }
  ]
};

export default chemistryCourse;
