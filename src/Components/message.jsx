import { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

function Message() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/.netlify/functions/discord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Pesan dari ${name}: ${message}`,
          username: name || "Anonymous",
        }),
      });
      if (!response.ok) throw new Error("Message could not be sent");
      setSuccess(true);
      setName("");
      setMessage("");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Ghost button — IBM spec */}
        <button
          type="button"
          className="inline-flex min-h-12 items-center gap-2 border border-[var(--border-subtle)] bg-transparent px-6 py-4 text-sm text-[var(--text-primary)] hover:bg-[var(--surface-muted)]"
          style={{
            fontFamily: "var(--ibm-font)",
            transition: "background-color var(--ibm-dur-fast) var(--ibm-ease)",
          }}
        >
          Send a message
        </button>
      </DialogTrigger>

      <DialogContent
        className="bg-[var(--modal-bg)] p-0 text-[var(--text-primary)] sm:max-w-[480px]"
        style={{
          border: "1px solid var(--border-subtle)",
          background: "var(--modal-bg)",
          borderRadius: 0,
          boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
          fontFamily: "var(--ibm-font)",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Header — dark bar like IBM modal */}
          <DialogHeader
            className="px-6 py-5"
            style={{ background: "var(--ibm-dark-bg)" }}
          >
            <DialogTitle
              className="text-lg font-semibold text-white"
              style={{ fontFamily: "var(--ibm-font)" }}
            >
              Send a message
            </DialogTitle>
          </DialogHeader>

          {/* Body */}
          <div className="space-y-5 px-6 py-6">
            {/* Name */}
            <div className="grid gap-1">
              <Label
                htmlFor="name"
                className="text-xs text-[var(--text-primary)]"
                style={{ fontFamily: "var(--ibm-font)" }}
              >
                Name
              </Label>
              <Input
                id="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-none border-0 bg-[var(--input-bg)] px-4 py-3 text-sm text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--ibm-border-focus)] focus:ring-inset"
                style={{
                  fontFamily: "var(--ibm-font)",
                  outline: "none",
                }}
              />
            </div>

            {/* Message */}
            <div className="grid gap-1">
              <Label
                htmlFor="message"
                className="text-xs text-[var(--text-primary)]"
                style={{ fontFamily: "var(--ibm-font)" }}
              >
                Message
              </Label>
              <textarea
                id="message"
                rows={4}
                className="min-h-28 w-full resize-none bg-[var(--input-bg)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--ibm-border-focus)]"
                style={{ fontFamily: "var(--ibm-font)", border: "none" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {success && (
              <p
                role="status"
                className="text-sm"
                style={{ color: "var(--ibm-primary)", fontFamily: "var(--ibm-font)" }}
              >
                Message sent successfully.
              </p>
            )}
            {error && (
              <p
                role="alert"
                className="text-sm text-red-700"
                style={{ fontFamily: "var(--ibm-font)" }}
              >
                Could not send your message. Please try again.
              </p>
            )}
          </div>

          {/* Footer */}
          <DialogFooter
            className="flex flex-row items-center gap-0 border-t px-6 py-4"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="rounded-none border-[var(--text-primary)] px-6 py-4 text-sm font-normal text-[var(--text-primary)] hover:bg-[var(--surface-muted)]"
                style={{ fontFamily: "var(--ibm-font)", height: "auto" }}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={loading}
              className="rounded-none bg-[var(--ibm-primary)] px-6 py-4 text-sm font-normal text-white hover:bg-[var(--ibm-primary-hover)] active:bg-[var(--ibm-primary-active)] disabled:opacity-50"
              style={{
                fontFamily: "var(--ibm-font)",
                height: "auto",
                transition: "background-color var(--ibm-dur-fast) var(--ibm-ease)",
              }}
            >
              {loading ? "Sending…" : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Message;
