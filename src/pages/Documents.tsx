import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File, X } from "lucide-react";

const Documents = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl mb-4">Document Upload</h1>
          <p className="text-muted-foreground">
            Upload your resume, CV, and other relevant documents
          </p>
        </div>

        <Card className="p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="file-upload"
              multiple
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="h-12 w-12 text-sage mb-4" />
              <span className="text-lg font-medium mb-2">
                Drop files here or click to upload
              </span>
              <span className="text-sm text-muted-foreground">
                Supported files: PDF, DOC, DOCX
              </span>
            </label>
          </div>

          {files.length > 0 && (
            <div className="mt-6 space-y-4">
              <h3 className="font-medium">Uploaded Files</h3>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <File className="h-5 w-5 text-sage" />
                    <span>{file.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Documents;
