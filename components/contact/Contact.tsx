import {
  Container,
  Title,
  Grid,
  TextInput,
  Textarea,
  Space,
  Button
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { object, string, InferType } from "yup";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";

const FormSchema = object().shape({
  name: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  subject: string().required("Required"),
  message: string().required("Required")
});

export function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    validate: yupResolver(FormSchema),
    validateInputOnChange: true,
    validateInputOnBlur: true
  });

  const handleSubmit = async (values: InferType<typeof FormSchema>) => {
    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        );
        form.reset();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container py="sm">
      <Title order={2}>Contact Me</Title>
      <Space h="lg" />
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Grid>
          <Grid.Col
            span={{
              base: 12,
              xs: 3
            }}
          >
            <TextInput
              classNames={{
                input: styles["TextInput-input"]
              }}
              variant="filled"
              label="Name"
              placeholder="Enter here"
              c="dimmed"
              radius="md"
              {...form.getInputProps("name")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 3
            }}
          >
            <TextInput
              classNames={{
                input: styles["TextInput-input"]
              }}
              variant="filled"
              label="Email"
              placeholder="Enter here"
              c="dimmed"
              radius="md"
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 6
            }}
          >
            <TextInput
              classNames={{
                input: styles["TextInput-input"]
              }}
              variant="filled"
              label="Subject"
              placeholder="Enter here"
              c="dimmed"
              radius="md"
              {...form.getInputProps("subject")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              classNames={{
                input: styles["Textarea-input"]
              }}
              variant="filled"
              label="Message"
              placeholder="Enter here"
              c="dimmed"
              radius="md"
              rows={4}
              {...form.getInputProps("message")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 3
            }}
            offset={{
              base: 0,
              xs: 9
            }}
          >
            <Button type="submit" variant="light" radius="md" fullWidth>
              Submit
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
}
