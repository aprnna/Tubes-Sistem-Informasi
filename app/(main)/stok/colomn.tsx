export type User = {
    id : string
    name: string
    email : string
    image: string
    lastSeen: string
}

export const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "lastSeen",
      label: "lastSeen",
    },
  ];