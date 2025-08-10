"use client";

import { useState } from "react";
import { TextInput, Label, Radio } from "flowbite-react";

const state = {};

type Tool = {
  name: string;
  dedicated: bool;
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
};

const char = {
  gnose: 0,
  ferramentas: [],
};

const practices = [
  ["compelir", "conhecer", "desvelar"],
  ["reger", "proteger", "velar"],
  ["desfiar", "aperfeiçoar", "fiar"],
  ["padronizar", "desfazer"],
  ["fazer"],
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
  value: string;
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
          id={choice.value}
          name={name}
          value={choice.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
        <Label htmlFor={choice.value}>{choice.label}</Label>
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

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
  });
  const [spell, setSpell] = useState<Spell>({
    kind: "",
  });

  return (
    <>
      {JSON.stringify(char, null, 2)}
      <br />
      {JSON.stringify(spell, null, 2)}
      {/* <Setup char={char} onChange={setChar} />; */}
      <SpellKind
        value={spell.kind}
        onChange={(value: string) => setSpell({ ...spell, kind: value })}
      />
    </>
  );
};

export default Magic;
