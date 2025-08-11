"use client";

import { useState } from "react";
import { TextInput, Label, Radio, Button } from "flowbite-react";

const state = {};

type Tool = {
  name: string;
  dedicated: boolean;
};

type Char = {
  gnose: number;

  life: number;
  time: number;
  fate: number;
  death: number;
  spirit: number;

  prime: number;
  matter: number;
  space: number;
  forces: number;
  mind: number;

  tools: Tool[];
};

type Spell = {
  kind: string;
  arcana: string;
  practice: string;
};

const char = {
  gnose: 0,
  ferramentas: [],
};

const arcana = [
  {
    value: "life",
    label: "Vida",
  },
  {
    value: "time",
    label: "Tempo",
  },
  {
    value: "fate",
    label: "Sorte",
  },
  {
    value: "death",
    label: "Morte",
  },
  {
    value: "spirit",
    label: "Espírito",
  },
  {
    value: "prime",
    label: "Primórdio",
  },
  {
    value: "matter",
    label: "Matéria",
  },
  {
    value: "space",
    label: "Espaço",
  },
  {
    value: "forces",
    label: "Forças",
  },
  {
    value: "mind",
    label: "Mente",
  }
]


const practices = [
  [
    {
      value: "compelling",
      label: "Compelir",
    },
    {
      value: "knowing",
      label: "Conhecer",
    },
    {
      value: "unveiling",
      label: "Desvelar",
    }
  ],
  [
    {
      value: "ruling",
      label: "Reger",
    },
    {
      value: "shielding",
      label: "Proteger",
    },
    {
      value: "veiling",
      label: "Velar",
    }
  ],
  [
    {
      value: "fraying",
      label: "Desfiar",
    },
    {
      value: "perfecting",
      label: "Aperfeiçoar",
    },
    {
      value: "weaving",
      label: "Fiar",
    }
  ],
  [
    {
      value: "patterning",
      label: "Padronizar",
    },
    {
      value: "unraveling",
      label: "Desfazer",
    }
  ],
  [
    {
      value: "making",
      label: "Fazer",
    }
  ]
];

const pages = [
  "setup",
  "kind",
  "practice",
  "arcana",
  "reaches",
  "yantras",
  "bonus",
];

type FieldProps = {
  name: string;
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Field = (props: FieldProps) => {
  const { name, label, value, onChange } = props;

  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="w-1/6 mb-2 block">
        <Label htmlFor={name}>{label}</Label>
      </div>
      <TextInput
        id={name}
        type="number"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

type RadioFieldsProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  choices: {
    value: string;
    label: string;
  }[];
};

const RadioFields = (props: RadioFieldsProps) => {
  const { name, choices, value, onChange } = props;

  return choices.map((choice) => {
    return (
      <div>
        <Radio
          id={choice.value.toString()}
          name={name}
          value={choice.value}
          checked={value === choice.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
        <Label htmlFor={choice.value.toString()}>{choice.label}</Label>
      </div>
    );
  });
};

type SetupProps = {
  char: Char;
  onChange: (char: Char) => void;
};

const Setup = (props: SetupProps) => {
  const { char, onChange } = props;

  const onChangeField = (field: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ ...char, [field]: parseInt(e.target.value) });
    };
  };

  return (
    <div>
      <Field
        name="gnose"
        label="Gnose"
        value={char["gnose"]}
        onChange={onChangeField("gnose")}
      />
      <div className="grid grid-cols-2 gap-4">
        <Field
          name="time"
          label="Tempo"
          value={char["time"]}
          onChange={onChangeField("time")}
        />
        <Field
          name="fate"
          label="Sorte"
          value={char["fate"]}
          onChange={onChangeField("fate")}
        />
        <Field
          name="death"
          label="Morte"
          value={char["death"]}
          onChange={onChangeField("death")}
        />
        <Field
          name="matter"
          label="Matéria"
          value={char["matter"]}
          onChange={onChangeField("matter")}
        />
        <Field
          name="forces"
          label="Forças"
          value={char["forces"]}
          onChange={onChangeField("forces")}
        />
        <Field
          name="spirit"
          label="Espírito"
          value={char["spirit"]}
          onChange={onChangeField("spirit")}
        />
        <Field
          name="mind"
          label="Mente"
          value={char["mind"]}
          onChange={onChangeField("mind")}
        />
        <Field
          name="prime"
          label="Primórdio"
          value={char["prime"]}
          onChange={onChangeField("prime")}
        />
        <Field
          name="space"
          label="Espaço"
          value={char["space"]}
          onChange={onChangeField("space")}
        />
        <Field
          name="life"
          label="Vida"
          value={char["life"]}
          onChange={onChangeField("life")}
        />
      </div>
    </div>
  );
};

type SpellKindProps = {
  value: string;
  onChange: (value: string) => void;
};

const SpellKind = (props: SpellKindProps) => {
  const { value, onChange } = props;

  return (
    <div>
      <RadioFields
        name={"spellKind"}
        value={value}
        choices={[
          {
            value: "improvised",
            label: "Improvisada",
          },
          {
            value: "praxis",
            label: "Praxis",
          },
          {
            value: "rote",
            label: "Rotina",
          },
        ]}
        onChange={onChange}
      />
    </div>
  );
};

type ArcanaProps = {
  value: string
  onChange: (value: string) => void;
}

const Arcana = (props: ArcanaProps) => {
  const { value, onChange } = props;

  return (
    <RadioFields
      name={"arcana"}
      value={value}
      choices={arcana}
      onChange={onChange}
    />
  )
}

type PracticeProps = {
  value: string;
  onChange: (value: string) => void;
}

const Practice = (props: PracticeProps) => {
  const { value, onChange } = props;

  const fields = practices.map((level, i) =>
    <>
      <div>Nível {i + 1}</div>
      <RadioFields
        name={"practice"}
        value={value}
        choices={level}
        onChange={onChange}
      />
    </>
  )

  return (
    <>
      {fields}
    </>
  );
}

const Magic = () => {
  const [char, setChar] = useState<Char>({
    gnose: 0,

    life: 0,
    time: 0,
    fate: 0,
    death: 0,
    spirit: 0,

    prime: 0,
    matter: 0,
    space: 0,
    forces: 0,
    mind: 0,

    tools: [],
  });
  const [spell, setSpell] = useState<Spell>({
    kind: "",
    arcana: "",
    practice: ""
  });
  const [page, setPage] = useState<number>(0);

  const comps = [
    <Setup char={char} onChange={setChar} />,
    <SpellKind
      value={spell.kind}
      onChange={(value: string) => setSpell({ ...spell, kind: value })}
    />,
    <Arcana
      value={spell.arcana}
      onChange={(value: string) => setSpell({ ...spell, arcana: value })}
    />,
    <Practice
      value={spell.practice}
      onChange={(value: string) => setSpell({ ...spell, practice: value })}
    />
  ]

  const advancePage = () => {
    setPage(page + 1);
  }

  const rewindPage = () => {
    setPage(page - 1);
  }

  return (
    <>
      {JSON.stringify(char)}
      {JSON.stringify(spell)}
      {comps[page] || <div>Page not found</div>}
      <Button onClick={rewindPage}>
        Anterior
      </Button>
      <Button onClick={advancePage}>
        Próxima
      </Button>
    </>
  );
};

export default Magic;
